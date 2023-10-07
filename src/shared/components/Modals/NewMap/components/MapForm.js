import React from "react"
import { useNavigate } from "react-router-dom"
import { FormControl, FormLabel, Heading, Input, Textarea, VStack, Select, Button, FormErrorMessage, useColorModeValue, Text } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "react-query"
import { addMap } from "../../../../../api/backendApi"
import ImagesDropzone from "./ImagesDropzone"

const MapForm = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      code: "",
      category: "",
      files: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Name Required").min(6, "Name is too Short").max(45, "Name is too Long"),
      description: Yup.string().required("Description Required").min(6, "Description is too Short").max(700, "Description is too Long"),
      code: Yup.string()
        .required("Code Required")
        .matches(/^[0-9]{4}-[0-9]{4}-[0-9]{4}$/, "Invalid map code format. Please use the format: xxxx-xxxx-xxxx"),
      category: Yup.string().required("Category Required"),
      files: Yup.array().required("Image Required").min(1, "Please select at least one image").max(3, "You can select up to 3 images only"),
    }),
    onSubmit: (values, actions) => {
      mutate(values)
    },
  })
  const { mutate, isError, error } = useMutation(addMap, {
    onSuccess: (data) => {
      formik.resetForm()
      navigate("/profile")
    },
  })

  return (
    <VStack as="form" mx="auto" w={{ base: "90%", md: 500 }} onSubmit={formik.handleSubmit} bg={useColorModeValue("white", "gray.700")}>
      <Heading>Add Map</Heading>
      <FormControl isInvalid={formik.errors.title && formik.touched.title} isRequired>
        <FormLabel>Title</FormLabel>
        <Input name="title" placeholder="enter map name" {...formik.getFieldProps("title")} autoFocus />
        <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.description && formik.touched.description} isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea name="description" placeholder="enter map description" {...formik.getFieldProps("description")} />
        <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.code && formik.touched.code} isRequired>
        <FormLabel>Code</FormLabel>
        <Input name="code" placeholder="enter map code: xxxx-xxxx-xxxx" {...formik.getFieldProps("code")} />
        <FormErrorMessage>{formik.errors.code}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={formik.errors.category && formik.touched.category} isRequired>
        <FormLabel>Category</FormLabel>
        <Select name="category" placeholder="Select option" {...formik.getFieldProps("category")}>
          <option value="Casual">Casual</option>
          <option value="Art">Art</option>
          <option value="Challenge">Challenge</option>
        </Select>
        <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
      </FormControl>
      <ImagesDropzone formik={formik} />
      {isError && (
        <Text color={"red.500"} mt={2} fontSize={"sm"} lineHeight={"normal"}>
          {error?.response?.data?.error ?? "Something went wrong, please try again later"}
        </Text>
      )}
      <Button type="submit" variant="outline" mt={4}>
        Submit
      </Button>
    </VStack>
  )
}

export default MapForm
