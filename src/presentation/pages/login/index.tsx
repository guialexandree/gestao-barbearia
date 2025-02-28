import React from 'react'
import { Divider, Slide, Stack, Typography } from '@mui/material'
import { FormActions, InputPassword, InputUsername } from '@/presentation/pages/login/components'

const LoginPage: React.FC = () => {
  return (
    <Stack
      onSubmit={(event) => {
        event.preventDefault()
      }}
      component="form"
      sx={{ width: { xs: '80%', sm: '70%' }, minWidth: 180, mt: 4 }}
      marginX={'auto'}
      spacing={2}
    >
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Typography variant="h6">Login</Typography>
      </Slide>

      <InputUsername />
      <InputPassword />
      <FormActions />
      <Divider />
    </Stack>
  )
}

export default LoginPage
