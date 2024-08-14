import Box from '@mui/material/Box'
import Column from './Column/Column'
import { Button } from '@mui/material'
import { NoteAdd } from '@mui/icons-material'
import { Column as ColumnType } from '~/types'

interface ListColumnsProps {
    columns: ColumnType[]
}

export default function ListColumns({ columns }: ListColumnsProps) {
    return (
        <Box sx={{ display: 'flex', overflowX: 'auto', overflowY: 'hidden' }}>
            {columns.map((column) => (
                <Column column={column} key={column._id} />
            ))}

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
