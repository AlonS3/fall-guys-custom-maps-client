import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  Center,
  Icon,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useColorModeValue,
  Image,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { CgSoftwareUpload, CgRemove } from "react-icons/cg";

const ImagesDropzone = ({ formik }) => {
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      formik.setFieldTouched("files", true, false);

      if (formik.values.files.length === 3) {
        // Here, instead of setting the local state error, we set Formik's error.
        formik.setFieldError(
          "files",
          "You have reached the maximum amount of images"
        );
        return;
      }

      if (acceptedFiles?.length) {
        const maximumFiles = 3 - formik.values.files.length;
        const limitAcceptedFiles = acceptedFiles.slice(0, maximumFiles);
        if (limitAcceptedFiles.length > 0) {
          formik.setFieldError("files", null); // Reset the error if files are successfully accepted.
          formik.setValues({
            ...formik.values,
            files: [
              ...formik.values.files,
              ...limitAcceptedFiles.map((file) =>
                Object.assign(
                  {},
                  { file },
                  { preview: URL.createObjectURL(file) }
                )
              )
            ]
          });
        }
      } else {
        if (rejectedFiles?.length) {
          if (rejectedFiles[0]?.errors?.length) {
            if (rejectedFiles[0].errors[0]?.message) {
              formik.setFieldError("files", rejectedFiles[0].errors[0].message); // Use error from dropzone.
            } else {
              formik.setFieldError("files", "Unknown file error");
            }
          }
        }
      }
    },
    [formik]
  );

  const onFileDialogCancel = useCallback(() => {
    formik.setFieldTouched("files", true, false);
  }, [formik]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
    onFileDialogCancel,
    maxFiles: 3,
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => {
      formik.values.files.forEach((fileObject) =>
        URL.revokeObjectURL(fileObject.preview)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");

  const removeFile = (removeIndex) => {
    const formikOldValues = { ...formik.values };
    delete formikOldValues.files;
    formik.setValues({
      ...formikOldValues,
      files: [
        ...formik.values.files.filter((file, index) => index !== removeIndex)
      ]
    });
  };

  const setThumbnail = (index) => {
    const formikOldValues = { ...formik.values };
    delete formikOldValues.files;
    const newFiles = [...formik.values.files]
    newFiles.unshift(newFiles.splice(index, 1)[0])
    formik.setValues({
      ...formikOldValues,
      files: [
        ...newFiles
      ]
    });
  };

  return (
    <FormControl
      isInvalid={formik.touched.files && formik.errors.files}
      isRequired
    >
      <FormLabel>Map Images</FormLabel>
      <Center
        {...getRootProps({ w: "100%" })}
        border={isDragActive ? "2px" : "1px"}
        borderColor={useColorModeValue(
          isDragActive ? "blue.500" : "gray.200",
          isDragActive ? "blue.500" : "whiteAlpha.300"
        )}
        borderRadius="md"
        borderStyle={isDragActive ? "dashed" : "solid"}
        _focusVisible={{ borderColor: "blue.500", outlineColor: "blue.500" }}
      >
        <input {...getInputProps()} />
        <VStack m={4}>
          <Icon
            as={CgSoftwareUpload}
            ml={1}
            boxSize={5}
            color="chakra-body-text._dark"
          />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop map images here, or click to select files</p>
          )}
        </VStack>
      </Center>
      <FormErrorMessage>{formik.errors.files}</FormErrorMessage>
      <Stack
        direction={["column", "row"]}
        spacing="24px"
        alignItems={["center", "flex-start"]}
        justifyContent="space-evenly"
        mt="0.5rem"
      >
        {formik.values.files.map((fileObject, index) => {
          return (
            <VStack key={index} justifyContent="center" alignItems="center">
              <Button
                variant="ghost"
                colorScheme="red"
                size="xs"
                fontSize="xs"
                onClick={() => removeFile(index)}
              >
                <Icon as={CgRemove} boxSize={5} />
              </Button>
              <Image
                boxSize={["200px","110px"]}
                objectFit="contain"
                src={fileObject.preview}
                alt={fileObject.file.name}
                border="1px"
                borderRadius="md"
                borderColor={borderColor}
              />
              {index > 0 ? (
                <Button
                  variant="solid"
                  size="xs"
                  fontSize="xs"
                  onClick={() => setThumbnail(index)}
                  w={"100%"}
                >
                  Set as Thumbnail
                </Button>
              ) : <Text borderBottom={"1px"} w={"100%"} textAlign={"center"} fontSize="sm" fontWeight="bold" >Thumbnail</Text>}
            </VStack>
          );
        })}
      </Stack>
    </FormControl>
  );
};

export default ImagesDropzone;
