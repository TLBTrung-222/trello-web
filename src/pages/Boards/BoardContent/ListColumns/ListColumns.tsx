import Box from '@mui/material/Box'
import Column from './Column/Column'

export default function ListColumns() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Column />
            <Column />
        </Box>
    )
}
