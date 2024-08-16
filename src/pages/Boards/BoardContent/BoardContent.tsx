import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { Board } from '~/types'
import { mapOrder } from '~/utils/sorts'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import React from 'react'

interface BoardContentProps {
    board: Board
}

export default function BoardContent({ board }: BoardContentProps) {
    const [orderedColumns, setOrderedColumns] = React.useState<typeof board.columns>([])

    React.useEffect(() => {
        const _orderedColumns = mapOrder(board.columns, board.columnOrderIds, '_id')
        setOrderedColumns(_orderedColumns)
    }, [board])

    const handleDragEnd = (e: DragEndEvent) => {
        console.log('hanlde drag end for columns:', e)
        const { active, over } = e

        // if user drag active column to new column
        if (over !== null && active.id !== over.id) {
            // get index of each column in columns
            const oldIndex = orderedColumns.findIndex((col) => col._id === active.id)
            const newIndex = orderedColumns.findIndex((col) => col._id === over.id)
            console.log(`Moving column from index ${oldIndex} to index ${newIndex}`)

            // Remove the column from the old index
            const [movedColumn] = orderedColumns.splice(oldIndex, 1)
            // Insert the column at the new index
            orderedColumns.splice(newIndex, 0, movedColumn)

            // TODO: retrieve the column ids and update to database
            // orderedColumnsIds = orderedColumns(c => c._id)

            // Update the state with the new order
            setOrderedColumns([...orderedColumns])
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Box
                sx={{
                    height: (theme) => theme.trello.boardContentHeight,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                    p: '10px 0'
                }}
            >
                <ListColumns columns={orderedColumns} />
            </Box>
        </DndContext>
    )
}
