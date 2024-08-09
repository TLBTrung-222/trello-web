import Box from '@mui/material/Box'
import Column from './Column/Column'
import { Button } from '@mui/material'
import { NoteAdd } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function ListColumns() {
    return (
        <Box sx={{ display: 'flex', overflowX: 'auto', overflowY: 'hidden' }}>
            <Column />
            <Column />

            {/* Button Add new column */}
            <Box sx={{ minWidth: '200px', maxWidth: '200px', borderRadius: '6px', height: 'fit-content' }}>
                <Button
                    variant="outlined"
                    startIcon={<NoteAdd />}
                    sx={{
                        color: 'white',
                        backgroundColor: '#ffffff3d',
                        mx: 2,
                        py: 1,
                        width: '100%',
                        '&:hover': {
                            backgroundColor: '#95a5a6'
                        }
                    }}
                >
                    Add new column
                </Button>
            </Box>
        </Box>
    )
}
