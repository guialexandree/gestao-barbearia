import React from 'react'
import { useSetRecoilState } from 'recoil'
import { ServiceModel } from '@/domain/models'
import {
  Box,
  Chip,
  Icon,
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  Stack,
} from '@mui/material'
import * as State from '@/presentation/pages/services/components/atoms'

type ServiceListItemProps = {
  service: ServiceModel
}

export const ServiceListItem: React.FC<ServiceListItemProps> = (props) => {
  const setSelectedUpdate = useSetRecoilState(State.updateServiceState)

  return (
    <ListItem
      key={`service-${props.service.id}`}
      component={Paper}
      sx={{
        borderRadius: 0,
        display: 'flex',
        flexWrap: 'wrap',
        borderBottom: 'solid 1px',
        borderColor: 'grey.800',
        boxShadow: 4,
        ':last-child': {
          borderBottom: 'none',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        },
      }}
    >
      <Stack direction="row" sx={{ flex: 1 }}>
        <ListItemText
          sx={{ flexGrow: 1 }}
          primary={props.service.name}
          secondary={props.service.description}
          slotProps={{
            secondary: { fontSize: 11 },
          }}
        />
        <ListItemText
          sx={{ mr: 'auto', flexGrow: 0.1 }}
          primary={`R$ ${props.service.price}`}
          secondary={`${props.service.timeExecution} min`}
        />
        <Box sx={{ mr: 1 }}>
          <IconButton
            sx={{ backgroundColor: '#42424240' }}
            edge="end"
            aria-label="delete"
            onClick={() => setSelectedUpdate(props.service)}
          >
            <Icon sx={{ color: 'grey.600' }}>edit</Icon>
          </IconButton>
        </Box>
      </Stack>

      <Box sx={{ display: 'block', width: '100%' }}>
        <Chip
          variant="outlined"
          icon={
            <Icon color="success" sx={{ fontSize: 10 }}>
              circle
            </Icon>
          }
          label={props.service.status}
          sx={{
            px: 0.5,
            borderRadius: 1,
            backgroundColor: '#42424240',
            boxShadow: 2,
            height: 24,
          }}
        />
      </Box>
    </ListItem>
  )
}
