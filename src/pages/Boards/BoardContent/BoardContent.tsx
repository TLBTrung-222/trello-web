import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { Board } from '~/types'
import { mapOrder } from '~/utils/sorts'

interface BoardContentProps {
    board: Board
}

export default function BoardContent({ board }: BoardContentProps) {
    const orderedColumns = mapOrder(board.columns, board.columnOrderIds, '_id')
    return (
        <Box
            sx={{
                height: (theme) => theme.trello.boardContentHeight,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                p: '10px 0'
            }}
        >
            <ListColumns columns={orderedColumns} />
        </Box>
    )
}
