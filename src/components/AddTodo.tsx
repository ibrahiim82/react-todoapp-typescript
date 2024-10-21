import { Box, TextField } from '@mui/material'
import React from 'react'

const AddTodo = () => {
  return (
    <Box component="form" sx={{display:{xs:"block",sm:"flex"}, justifyContent: {sx:"flex-start",sm:"center"}, m: {xs:1, sm:"auto"}, height:{xs:"120px", sm:"80px"} }} >
        <TextField />
    </Box>
  )
}

export default AddTodo