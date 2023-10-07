import React from "react"

import { Box, useColorModeValue } from "@chakra-ui/react"

const MainLogo = (props) => {
  const strokeColor = useColorModeValue("white", "gray.800")
  return (
    <Box as="svg" xmlns="http://www.w3.org/2000/svg" width="588.7" viewBox="0 0 588.7 241.25" {...props}>
      <path
        fill="none"
        d="M84.72 170.1v-48.47c0-4.36 1.1-8.41 3.11-11.91-4.44-.27-8.39-.88-11.97-1.85-.44-.12-.86-.25-1.28-.38.1.13.2.24.3.37l.29.4c2.76 3.95 4.22 8.47 4.22 13.06v48.95c1.91-.07 3.68-.13 5.33-.17ZM278.37 90.61c-.44 2.36-1.05 4.43-1.77 6.25.83-.03 1.66-.04 2.48-.04 1.81 0 3.5.05 5.11.13a39.863 39.863 0 0 1-3.33-4.78c-.76-1.27-1.45-2.61-2.09-4-.12.83-.25 1.65-.4 2.45ZM433.94 97.09c1.91.25 3.73.62 5.44 1.09a19.64 19.64 0 0 1-1.75-5.35 39.968 39.968 0 0 1-3.69 4.26ZM480.28 108.83c-.17.02-.34.05-.51.07-4.95.65-9.97.98-14.91.98-4.2 0-7.32-.19-9.91-.63 2.33 3.71 3.58 7.85 3.58 12.07v48.95c4.07-.16 7.56-.24 10.5-.24.74 0 1.46.06 2.18.14-.22-.38-.45-.76-.66-1.15-3.63-6.67-5.47-14.22-5.47-22.43 0-19.67 8.01-31.29 15.2-37.76Z"
      />
      <Box
        as="path"
        fill={strokeColor}
        d="M575.77 157.48c2.08-2.81 3.93-6.22 5.57-10.22 3.33-8.17 5.03-16.13 5.03-23.66 0-4.8-1.8-13.79-13.86-20.14-.23-.12-.47-.24-.71-.36.48-.32.95-.64 1.41-.98 3.84-2.81 7.05-6.23 9.55-10.17 3.94-6.23 5.93-13.19 5.93-20.69 0-6.73-1.42-12.91-4.21-18.37-.96-1.88-2.04-3.64-3.22-5.27.74-1.35 1.46-2.84 2.12-4.48 2.55-6.25 3.85-12.4 3.85-18.26 0-4.53-1.61-12.97-12.43-18.67-3.8-2-8.64-3.43-15.7-4.66C553.06.5 546.26-.01 538.32-.01c-10.38 0-19.16 2.01-26.23 5.96-6.29-4.39-13.71-4.92-18.8-4.92-5.72 0-11.76.79-17.93 2.36-1.37.35-2.64.73-3.83 1.15-4.06-2.17-9.23-3.51-15.68-3.51-7.04 0-13.89 1.12-20.35 3.34-.12.04-.24.09-.36.13-4.2-2.37-9.44-3.58-15.69-3.58-7.1 0-13.64 1.04-19.42 3.08-.84.3-1.65.61-2.42.94-4.3-2.67-9.73-4.02-16.23-4.02-7.17 0-13.74 1.04-19.52 3.08-1.35.48-2.6 1-3.75 1.55a27.36 27.36 0 0 0-3.99-2.08c-5.77-2.41-13.27-3.49-24.32-3.49-4.53 0-8.91.34-13 1.01-4.78.78-9.81 2.4-14.95 4.82-5.59 2.64-10.51 6.14-14.61 10.4-4.37 4.54-7.89 10.54-10.45 17.81-2.35 6.68-3.56 14.27-3.59 22.55-5.28-5.28-12.08-5.53-13.29-5.53-.52 0-1.07 0-1.64.01V23.3c0-4.28-1.34-8.46-3.88-12.09l-.29-.41C250.76 6.29 244.09.91 231.31.91c-7.05 0-13.65 1.12-19.61 3.33-6.2 2.3-10.29 5.27-12.94 8.44-.29-.5-.6-.99-.94-1.47l-.29-.41C194.19 6.29 187.52.91 174.74.91c-7.05 0-13.65 1.12-19.61 3.33-4.82 1.79-8.36 3.98-10.95 6.36-3.66-5.15-10.63-9.58-23.79-9.58-6.61 0-12.93.33-18.81.99-4.7.53-12.34 1.4-17.82 6.2-3.54-4.59-8.83-7.3-14.8-7.3H30.4c-7.73 0-12.82.75-17.02 2.53C5.13 6.96 0 14.61 0 23.43v65.94c0 7.57 4.13 14.17 10.86 17.65-5.92 4.52-8.93 10.22-8.93 17.04v94.67c0 8.95 5.78 16.59 14.69 19.46 3.65 1.18 8.32 1.69 15.59 1.69h55.86c2.68 0 6.23-.52 9.69-2.56.13.06.25.12.38.17 4.06 1.67 9.06 2.39 16.72 2.39h64.53c3.74 0 16.29-1.35 20.63-18.73.99-3.97 1.58-8.91 1.8-14.98 2.16 6.02 4.21 11.79 6.12 17.31 2.22 6.3 6.78 11.23 12.83 13.86 4.11 1.8 9.06 2.54 17.07 2.54 19.42 0 37.3-1.25 42.67-16.36l.04-.1c2.72-7.83 5.28-15.15 7.68-21.97v16.52c0 8.65 5.15 16.13 13.42 19.53 4.06 1.67 9.06 2.39 16.72 2.39h64.53c1.86 0 5.91-.34 10.04-2.82.9.43 1.84.81 2.83 1.13 3.65 1.18 8.32 1.69 15.59 1.69h55.86c3.65 0 8.91-.96 13.38-5.44 4.41 1.67 9.92 3.1 16.94 4.39 8.72 1.61 18.01 2.42 27.6 2.42 10.21 0 18.58-.92 25.58-2.82 7.6-2.06 13.64-4.78 18.49-8.34 4.79-3.51 8.79-7.77 11.9-12.67 4.93-7.79 7.43-16.52 7.43-25.95 0-8.55-1.77-16.35-5.27-23.2-2.09-4.09-4.59-7.7-7.46-10.8Zm-105.23 11.53c.21.39.44.77.66 1.15-.72-.08-1.44-.14-2.18-.14-2.95 0-6.44.08-10.5.24v-48.95c0-4.22-1.24-8.36-3.58-12.07 2.58.44 5.71.63 9.91.63 4.94 0 9.96-.33 14.91-.98.18-.02.34-.05.51-.07-7.19 6.47-15.2 18.09-15.2 37.76 0 8.21 1.84 15.75 5.47 22.43Zm-32.91-76.18c.33 1.88.92 3.68 1.75 5.35-1.71-.48-3.52-.84-5.44-1.09 1.24-1.24 2.48-2.65 3.69-4.26Zm-153.44 4.12c-1.61-.08-3.3-.13-5.11-.13-.82 0-1.65.02-2.48.04.72-1.82 1.33-3.89 1.77-6.25.15-.8.28-1.62.4-2.45a40.79 40.79 0 0 0 5.42 8.78ZM75.17 108.26l-.29-.4c-.09-.13-.2-.25-.3-.37.42.13.84.26 1.28.38 3.57.97 7.53 1.58 11.97 1.85-2.01 3.5-3.11 7.55-3.11 11.91v48.47c-1.66.04-3.42.09-5.33.17v-48.95c0-4.59-1.46-9.11-4.22-13.06Z"
      />
      <path
        fill="#6c53f3"
        d="M16.6 98.12c2.16.89 5.2 1.26 10.47 1.26 4.26 0 8.8-.26 13.49-.77 3.54-.38 12.95-1.4 12.95-9.25V75.82l10.01.36h.25c2.76 0 7.69-1.25 9.72-9.67.82-3.4 1.23-7 1.23-10.69 0-4.13-.28-6.72-.95-8.68-.04-.12-.09-.25-.13-.37 1.36-1.44 2.55-3.63 3.34-6.89.8-3.31 1.18-7.76 1.18-13.6 0-3.33-.25-5.8-.8-7.76-1.45-5.23-5.28-7.09-8.38-7.09H30.4c-6.16 0-10.14.52-12.92 1.7-4.37 1.85-6.98 5.7-6.98 10.29v65.94c0 3.92 2.28 7.19 6.1 8.76ZM113.91 42.77h-2.29l-1.77 18.72h5.62l-1.56-18.72z"
      />
      <path
        fill="#6c53f3"
        d="M77.9 53.41c-9.58 30.4-9.58 32.39-9.58 33.98 0 3.44 1.79 8.02 10.31 10.34 4.07 1.11 8.88 1.65 14.69 1.65 6.23 0 10.29-.5 13.18-1.61 2.76-1.07 4.87-2.87 6.17-5.18 4.14 6.8 17.09 6.8 24.53 6.8 6.39 0 10.99-.87 14.24-2.7.9.73 2.01 1.35 3.36 1.79 1.97.64 4.7.91 9.13.91h38.17c2.43 0 4.42-.89 5.98-2.65.89.71 1.97 1.31 3.3 1.74 1.97.64 4.7.91 9.13.91h38.17c4.89 0 8.04-3.6 9.38-10.7.7-3.74 1.06-8.18 1.06-13.2 0-12.11-5.75-13.92-9.18-13.92-3.1 0-7.1.13-12.14.4V23.32c0-2.12-.69-4.22-1.99-6.08l-.12-.16c-2.81-3.79-7.51-5.64-14.36-5.64-5.8 0-11.17.9-15.95 2.67-2.62.97-10.6 3.93-10.6 11.09v36.48c-.5-.08-.98-.11-1.42-.11-3.1 0-7.1.13-12.14.4V23.32c0-2.12-.69-4.22-1.99-6.08l-.12-.16c-2.81-3.79-7.51-5.64-14.36-5.64-5.8 0-11.17.9-15.95 2.67-2.62.97-10.6 3.93-10.6 11.09v31.61c-2.76-9.24-6.39-21.32-11.15-37.16-2.43-8.11-13.12-8.11-16.64-8.11-6.22 0-12.15.31-17.63.93-6.61.74-12.23 1.76-14.12 6.68l-.17.49c-.88 2.92-4.44 14.29-10.58 33.77ZM297.4 95.11c2.91 2.08 5.85 3.49 8.72 4.18 2.54.61 5.3.92 8.19.92 4.58 0 8.43-1.06 11.48-3.16.82.58 1.59.92 2.13 1.12 1.63.6 3.94 1 9.85 1 4.26 0 8.43-.31 12.39-.91 2.82-.43 11.41-1.73 11.41-9.1v-2.82a29.27 29.27 0 0 0 4.48 4.77c7.1 6.04 17.04 9.11 29.55 9.11s22.44-3.08 29.44-9.15c7.3-6.32 11-15.64 11-27.7V48.28c2.88 6.2 6.71 14.2 11.79 24.61v16.48c0 4.06 2.49 7.48 6.49 8.92 2.15.78 5.2 1.09 10.55 1.09 4.49 0 9.04-.3 13.55-.89 3.72-.49 12.43-1.63 12.43-9.12V72.82c5.89-12.66 10.12-21.86 13.15-28.59.4 3.37 1.38 6.49 2.92 9.32 1.37 2.52 3.01 4.7 4.9 6.5-5.94 1.45-7.86 8.69-8.53 11.25-1.26 4.76-1.9 9.44-1.9 13.91 0 3.94 2.43 7.19 7.22 9.65 2.97 1.53 7.19 2.77 13.28 3.89 5.67 1.04 11.71 1.57 17.96 1.57s11.83-.57 16.18-1.75c4.59-1.24 8.19-2.85 10.99-4.91 2.77-2.03 5.09-4.49 6.87-7.31 2.86-4.52 4.31-9.59 4.31-15.08 0-5.05-1.03-9.62-3.06-13.59-2.03-3.96-4.67-7.13-7.86-9.41 3.66-2.39 5.54-6.99 6.4-9.09 2.04-4.99 3.07-9.79 3.07-14.29 0-3.84-2.29-6.99-6.81-9.37-2.75-1.45-6.76-2.59-12.61-3.61-5.36-.93-11.75-1.4-18.98-1.4-14.01 0-22.46 4.09-27.5 9.6-.76-1.73-2.1-3.57-4.39-5.29-2.98-2.23-7.15-3.27-13.14-3.27-4.86 0-10.02.68-15.35 2.04-1.57.4-4.82 1.22-7.64 3.07-2.43-2.75-6.76-5.1-14.46-5.1-5.88 0-11.58.93-16.94 2.77-1.38.47-3.48 1.2-5.52 2.34-3.87-5.22-11.45-5.22-13.94-5.22-5.91 0-11.26.83-15.91 2.48-3.21 1.14-5.69 2.55-7.44 4.23-.28-.47-.59-.94-.93-1.42l-.17-.22c-3.98-5.08-11.24-5.08-13.62-5.08-5.97 0-11.36.83-16.01 2.48-3.76 1.33-6.51 3.04-8.26 5.12-1.6-2.57-3.98-4.59-7.04-5.86-4.36-1.82-10.81-2.67-20.28-2.67-3.97 0-7.78.29-11.32.87-3.82.62-7.91 1.95-12.16 3.96-4.43 2.09-8.31 4.84-11.52 8.19-3.32 3.45-6.05 8.17-8.11 14.02-1.99 5.65-3 12.17-3 19.38 0 13.12 2.02 22.9 6.18 29.89 2.02 3.39 4.54 6.19 7.51 8.31Zm57.44-49.51v4.04c-.85-.43-1.77-.8-2.79-1.09.97-.73 1.91-1.69 2.79-2.95Zm-19.39 2.96c-1.79.44-3.59 1.03-5.4 1.78-.97.4-1.87.83-2.7 1.28.34-2.7.97-3.87 1.22-4.08.04-.01.2-.05.5-.05.75 0 2.55.15 6.37 1.08ZM563.34 160.44c-1.83-1.3-3.74-2.52-5.72-3.66h.29c8.2 0 12.2-9.8 13.71-13.49 2.82-6.9 4.25-13.53 4.25-19.69 0-4.32-2.77-7.96-8.24-10.84-3.67-1.93-9.4-3.55-17.5-4.96-7.67-1.33-16.83-2.01-27.22-2.01-15.07 0-26.76 3.39-34.75 10.08-8.35 7-12.59 17.33-12.59 30.71 0 6.43 1.41 12.29 4.2 17.42 2.77 5.1 6.35 9.14 10.64 12 3.25 2.17 6.79 4.18 10.52 5.99-11.89-4.06-12.29-4.06-13.64-4.06-5.26 0-8.35 3.79-10.21 7.68-1.69-3.37-4.37-5.09-8.05-5.09-5.07 0-12.11.26-21 .77v-59.98c0-2.47-.78-4.84-2.33-7.05l-.12-.16c-3.46-4.67-9.48-6.94-18.41-6.94-8.1 0-15.58 1.25-22.22 3.71-2.73 1.01-8.83 3.28-11.76 7.77-.72-5.27-2.95-11.33-9.85-11.33h-61.18c-7.4 0-12.43.74-15.83 2.34-1.95.92-3.56 2.18-4.8 3.71-1.67-1.65-4.04-2.98-7.49-4.2-3.53-1.24-8.42-1.84-14.95-1.84s-12.97.89-20.09 2.64c-3.04.75-11.31 2.79-14.46 8.83-.87-2.51-2.82-5.43-6.99-8-3.8-2.33-9.08-3.47-16.14-3.47-6.27 0-12.2.75-17.6 2.23-5.55 1.52-9.83 3.26-13.09 5.33-.4.25-.94.6-1.53 1.02-1.1-4.42-3.61-8.58-9.33-8.58h-61.19c-7.4 0-12.43.74-15.83 2.34-4.83 2.27-7.61 6.63-7.61 11.97v60.56c-1.45-1.1-3.23-1.66-5.33-1.66-5.07 0-12.11.26-21 .77v-59.98c0-2.47-.78-4.84-2.33-7.05l-.12-.16c-3.46-4.67-9.48-6.94-18.41-6.94-8.1 0-15.58 1.25-22.22 3.71-3.66 1.36-13.39 4.97-13.39 13.18v94.67c0 4.43 2.78 7.98 7.43 9.47 1.69.55 4.63 1.18 12.36 1.18h55.86c4.48 0 7.04-3.01 8.54-6.23 1.18 2.01 3.08 3.63 5.53 4.64 2.67 1.1 6.59 1.59 12.71 1.59h64.53c3.54 0 8.22-1.87 10.44-10.78 1.06-4.25 1.58-10.08 1.58-17.83 0-4.25 0-16.93-9.37-17.62.43-.88.84-1.87 1.19-2.97 1.31-4.03 1.94-9.49 1.94-16.69 0-5.23-.91-8.84-2.27-11.33 2.21-1.47 4.3-4.29 5.57-9.45.12-.48.23-.99.33-1.52 1.84 4.91 4.3 11.44 7.63 20.21 8.25 21.73 15.45 41.43 21.4 58.59 1.26 3.57 3.73 6.25 7.14 7.74 2.65 1.16 6.49 1.65 12.86 1.65 21.74 0 30.32-2.45 32.79-9.42 12.71-36.53 21.86-62.17 27.21-76.31.3-.81.59-1.61.88-2.41v76.73c0 4.37 2.59 8.04 6.92 9.82 2.67 1.1 6.59 1.59 12.71 1.59h64.53c3.01 0 6.83-1.37 9.29-7.25 1.05 2.81 3.44 4.98 6.82 6.07 1.69.55 4.63 1.18 12.36 1.18h55.86c5.7 0 8.29-4.86 9.54-8.86 1.62 1.29 3.25 2.14 4.14 2.6 4 2.06 10.06 3.82 18.53 5.38 8.09 1.49 16.74 2.25 25.7 2.25s16.74-.8 22.83-2.45c6.33-1.71 11.24-3.89 15.02-6.67 3.73-2.74 6.84-6.04 9.23-9.82 3.85-6.09 5.8-12.93 5.8-20.33 0-6.87-1.38-13.06-4.12-18.41s-6.29-9.6-10.54-12.63Zm-177.81 22.7c.44-.88.84-1.87 1.2-2.98 1.3-4.03 1.94-9.49 1.94-16.69 0-5.23-.91-8.84-2.27-11.33 2-1.32 3.88-3.77 5.17-8.01v42.16c-1.37-1.73-3.3-2.95-6.03-3.15Z"
      />
      <path
        fill="#77d1dd"
        d="M19.27 91.65c1.18.49 3.78.73 7.8.73s8.27-.24 12.74-.73c4.47-.48 6.71-1.25 6.71-2.29v-20.8l17.26.62c1.25 0 2.22-1.44 2.91-4.32.69-2.88 1.04-5.89 1.04-9.05s-.19-5.29-.57-6.4c-.38-1.11-1.09-1.66-2.13-1.66-3.12 0-9.29.21-18.51.62V41.3l21.11 1.04c1.04 0 1.89-1.37 2.55-4.11.66-2.74.99-6.72.99-11.96s-.73-7.85-2.18-7.85H30.4c-4.99 0-8.39.38-10.19 1.14-1.8.76-2.7 2.05-2.7 3.85v65.94c0 1.04.59 1.8 1.77 2.29ZM84.58 55.51c-6.17 19.59-9.26 30.21-9.26 31.88 0 1.46 1.72 2.65 5.15 3.59 3.43.94 7.71 1.4 12.84 1.4s8.68-.38 10.66-1.14c1.98-.76 3.03-2.15 3.17-4.16l.52-5.82h9.98l.73 6.76c.28 2.91 6.55 4.37 18.82 4.37 5.75 0 9.6-.76 11.54-2.29.83-.69 1.25-1.39 1.25-2.08s-6.55-22.81-19.66-66.35c-.62-2.08-3.94-3.12-9.93-3.12s-11.61.3-16.85.88c-5.24.59-8.03 1.34-8.37 2.24-.9 2.98-4.44 14.27-10.61 33.85Zm27.04-12.74h2.29l1.56 18.72h-5.62l1.77-18.72ZM156.96 91.81c1.18.38 3.5.57 6.97.57h38.17c1.04 0 1.87-1.66 2.5-4.99.62-3.33.94-7.3.94-11.91s-.73-6.92-2.18-6.92c-4.3 0-10.68.28-19.14.83V23.32c0-.69-.24-1.39-.73-2.08-1.39-1.87-4.3-2.81-8.74-2.81-4.99 0-9.5.75-13.52 2.24-4.02 1.49-6.03 3-6.03 4.52v64.69c0 .9.59 1.54 1.77 1.92ZM211.77 89.88c0 .9.59 1.54 1.77 1.92 1.18.38 3.5.57 6.97.57h38.17c1.04 0 1.87-1.66 2.5-4.99.62-3.33.94-7.3.94-11.91s-.73-6.92-2.18-6.92c-4.3 0-10.68.28-19.14.83V23.32c0-.69-.24-1.39-.73-2.08-1.39-1.87-4.3-2.81-8.74-2.81-4.99 0-9.5.75-13.52 2.24-4.02 1.49-6.03 3-6.03 4.52v64.69Z"
      />
      <path
        fill="#dd5f9f"
        d="M301.47 89.42c2.18 1.56 4.28 2.58 6.29 3.07 2.01.48 4.19.73 6.55.73 4.02 0 7.02-1.07 9-3.22 1.98-2.15 3.21-4.71 3.69-7.7h.83l.73 6.14c.14 1.73.73 2.79 1.77 3.17 1.04.38 3.52.57 7.44.57s7.7-.28 11.34-.83c3.64-.55 5.46-1.28 5.46-2.18V60.36c0-.97-.49-2.08-1.46-3.33-.56-.76-1.58-1.35-3.07-1.77-1.49-.42-3.87-.62-7.12-.62s-6.66.73-10.19 2.18-5.3 3.05-5.3 4.78v9.36c-2.08-.28-3.81-1.65-5.2-4.11-1.39-2.46-2.08-6.22-2.08-11.28 0-10.05 2.98-15.08 8.94-15.08 2.08 0 5.2.54 9.36 1.61 4.16 1.08 6.52 1.61 7.07 1.61 2.29 0 4.02-1.85 5.2-5.56 1.18-3.71 1.77-7.16 1.77-10.35 0-4.02-1.7-6.74-5.1-8.16-3.4-1.42-9.26-2.13-17.58-2.13-3.61 0-7 .26-10.19.78-3.19.52-6.62 1.65-10.3 3.38-3.68 1.73-6.83 3.97-9.46 6.71-2.64 2.74-4.82 6.57-6.55 11.49-1.73 4.92-2.6 10.61-2.6 17.06 0 11.72 1.73 20.49 5.2 26.31 1.52 2.57 3.38 4.63 5.56 6.19ZM370.58 85.78c5.82 4.96 14.16 7.44 25.01 7.44s19.14-2.48 24.86-7.44c5.72-4.96 8.58-12.43 8.58-22.41V24.05c0-.9-.42-1.98-1.25-3.22-1.18-1.59-3.95-2.39-8.32-2.39-5.13 0-9.66.69-13.57 2.08-3.92 1.39-5.88 2.95-5.88 4.68v29.74c0 8.04-.26 13.3-.78 15.76-.52 2.46-1.75 3.69-3.69 3.69s-3.21-1.26-3.8-3.8c-.59-2.53-.88-7.71-.88-15.55V24.05c0-.9-.45-1.98-1.35-3.22-1.25-1.59-3.95-2.39-8.11-2.39-5.2 0-9.76.69-13.68 2.08-3.92 1.39-5.88 2.95-5.88 4.68v38.17c0 9.98 2.91 17.46 8.74 22.41ZM434.23 25.51c0 2.43 6.86 17.68 20.59 45.76v18.1c0 1.11.62 1.89 1.87 2.34 1.25.45 3.97.68 8.16.68s8.41-.28 12.64-.83c4.23-.55 6.34-1.28 6.34-2.18v-18.1c13.94-29.95 20.9-45.59 20.9-46.9 0-1.39-.83-2.7-2.5-3.95s-4.65-1.87-8.94-1.87-8.84.61-13.62 1.82c-4.78 1.21-7.25 2.79-7.38 4.73l-1.98 27.25h-1.14l-2.81-27.98c-.42-3.88-3.92-5.82-10.5-5.82-5.13 0-10.02.8-14.66 2.39-4.65 1.6-6.97 3.12-6.97 4.58ZM513.06 50.21c1.52 2.81 3.43 4.98 5.72 6.5 2.29 1.53 4.77 2.91 7.44 4.16s5.15 2.2 7.44 2.86c2.29.66 4.19 1.42 5.72 2.29 1.52.87 2.29 1.86 2.29 2.96s-.42 1.96-1.25 2.55c-.83.59-2.64.88-5.41.88s-6.9-.94-12.38-2.81-8.36-2.81-8.63-2.81c-1.53 0-2.84 2.1-3.95 6.29-1.11 4.2-1.66 8.23-1.66 12.12 0 1.11 1.14 2.25 3.43 3.43 2.29 1.18 6.07 2.25 11.34 3.22 5.27.97 10.83 1.46 16.69 1.46s10.64-.5 14.35-1.51c3.71-1 6.6-2.27 8.68-3.8 2.08-1.52 3.78-3.33 5.1-5.41 2.15-3.4 3.22-7.18 3.22-11.34s-.76-7.42-2.29-10.4c-1.53-2.98-3.43-5.29-5.72-6.92a44.38 44.38 0 0 0-7.44-4.26c-2.67-1.21-5.13-2.11-7.38-2.7-2.25-.59-4.14-1.25-5.67-1.98-1.53-.73-2.29-1.66-2.29-2.81s.54-1.99 1.61-2.55c1.07-.55 3.12-.83 6.14-.83s6.81 1.01 11.39 3.02c1.52.62 2.43.94 2.7.94 1.59 0 3.24-2.08 4.94-6.24 1.7-4.16 2.55-8.04 2.55-11.65 0-1.04-1.02-2.1-3.07-3.17-2.05-1.07-5.56-2.04-10.56-2.91-4.99-.87-10.92-1.3-17.78-1.3-18.37 0-27.56 7.7-27.56 23.09 0 3.61.76 6.81 2.29 9.62Z"
      />
      <path
        fill="#f0c960"
        d="M89.9 187.53c-6.29 0-15.63.41-28 1.22v-67.42c0-1.01-.36-2.03-1.07-3.04-2.03-2.74-6.29-4.11-12.78-4.11-7.31 0-13.9 1.09-19.79 3.27-5.89 2.18-8.83 4.39-8.83 6.62v94.67c0 1.32.86 2.26 2.59 2.82 1.72.56 5.12.84 10.2.84h55.86c1.52 0 2.74-2.44 3.65-7.31.91-4.87 1.37-10.68 1.37-17.43s-1.07-10.12-3.2-10.12ZM179.85 114.32h-61.19c-6.19 0-10.48.56-12.86 1.67-2.39 1.12-3.58 2.99-3.58 5.63v96.34c0 1.52.86 2.64 2.59 3.35 1.72.71 5.07 1.07 10.04 1.07h64.53c1.52 0 2.74-1.83 3.65-5.48.91-3.65 1.37-9.03 1.37-16.13s-1.07-10.65-3.2-10.65c-6.7 0-18.87.66-36.53 1.98v-9.74l27.55.61c1.83 0 3.27-1.65 4.34-4.95 1.07-3.3 1.6-8.14 1.6-14.54s-1.37-9.59-4.11-9.59c-4.57 0-14.36.3-29.38.91v-10.2c15.62 1.32 26.73 1.98 33.33 1.98 1.52 0 2.74-1.85 3.65-5.56.91-3.7 1.37-9.08 1.37-16.13s-1.06-10.58-3.2-10.58ZM291.71 115.76c-2.74-.96-6.95-1.45-12.63-1.45s-11.82.81-18.42 2.43c-6.6 1.62-10.05 3.86-10.35 6.7l-4.72 54.03h-2.13l-5.33-55.4c-.2-1.93-1.62-3.7-4.26-5.33-2.64-1.62-6.8-2.43-12.48-2.43s-10.93.66-15.75 1.98c-4.82 1.32-8.55 2.82-11.19 4.49-2.64 1.67-3.96 3.12-3.96 4.34 0 .61 4.16 11.87 12.48 33.79s15.47 41.5 21.46 58.75c.61 1.73 1.72 2.94 3.35 3.65 1.62.71 4.97 1.07 10.05 1.07 16.33 0 25.06-1.57 26.18-4.72 12.79-36.73 21.87-62.2 27.24-76.4 1.62-4.46 3.17-8.65 4.64-12.56 1.47-3.91 2.21-6.29 2.21-7.15s-.38-1.8-1.14-2.82c-.76-1.01-2.51-2-5.25-2.97ZM384.71 190.11c-6.7 0-18.87.66-36.53 1.98v-9.74l27.55.61c1.83 0 3.27-1.65 4.34-4.95 1.07-3.3 1.6-8.14 1.6-14.54s-1.37-9.59-4.11-9.59c-4.57 0-14.36.3-29.38.91v-10.2c15.62 1.32 26.74 1.98 33.33 1.98 1.52 0 2.74-1.85 3.65-5.56.91-3.7 1.37-9.08 1.37-16.13s-1.07-10.58-3.2-10.58h-61.18c-6.19 0-10.48.56-12.86 1.67-2.39 1.12-3.58 2.99-3.58 5.63v96.34c0 1.52.86 2.64 2.59 3.35 1.72.71 5.07 1.07 10.04 1.07h64.53c1.52 0 2.74-1.83 3.65-5.48.91-3.65 1.37-9.03 1.37-16.13s-1.07-10.65-3.2-10.65ZM469.03 187.53c-6.29 0-15.63.41-28 1.22v-67.42c0-1.01-.36-2.03-1.07-3.04-2.03-2.74-6.29-4.11-12.79-4.11-7.3 0-13.9 1.09-19.79 3.27-5.89 2.18-8.83 4.39-8.83 6.62v94.67c0 1.32.86 2.26 2.59 2.82 1.72.56 5.12.84 10.2.84h55.86c1.52 0 2.74-2.44 3.65-7.31s1.37-10.68 1.37-17.43-1.07-10.12-3.2-10.12ZM559.28 166.14c-3.35-2.38-6.98-4.46-10.88-6.24-3.91-1.77-7.51-3.09-10.81-3.96-3.3-.86-6.06-1.83-8.29-2.89-2.23-1.07-3.35-2.43-3.35-4.11s.79-2.92 2.36-3.73c1.57-.81 4.57-1.22 8.98-1.22s9.97 1.47 16.67 4.41c2.23.91 3.55 1.37 3.96 1.37 2.33 0 4.74-3.04 7.23-9.13 2.49-6.09 3.73-11.77 3.73-17.05 0-1.52-1.5-3.07-4.49-4.64-2.99-1.57-8.14-2.99-15.45-4.26-7.31-1.27-15.98-1.9-26.03-1.9-26.89 0-40.33 11.26-40.33 33.79 0 5.28 1.12 9.97 3.35 14.08 2.23 4.11 5.02 7.28 8.37 9.51 3.35 2.23 6.97 4.26 10.88 6.09 3.91 1.83 7.53 3.22 10.88 4.19 3.35.96 6.14 2.08 8.37 3.35 2.23 1.27 3.35 2.72 3.35 4.34s-.61 2.87-1.83 3.73c-1.22.86-3.86 1.29-7.91 1.29s-10.1-1.37-18.11-4.11c-8.02-2.74-12.23-4.11-12.63-4.11-2.23 0-4.16 3.07-5.78 9.21-1.62 6.14-2.44 12.05-2.44 17.73 0 1.62 1.67 3.3 5.02 5.02 3.35 1.73 8.88 3.3 16.59 4.72 7.71 1.42 15.85 2.13 24.43 2.13s15.57-.74 21-2.21 9.67-3.32 12.71-5.56c3.04-2.23 5.53-4.87 7.46-7.91 3.14-4.97 4.72-10.5 4.72-16.59s-1.12-10.86-3.35-15.22c-2.23-4.36-5.02-7.74-8.37-10.12Z"
      />
    </Box>
  )
}

export default MainLogo
