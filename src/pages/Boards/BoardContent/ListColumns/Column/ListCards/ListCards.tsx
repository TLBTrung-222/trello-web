import Box from '@mui/material/Box'
import { COLUMN_HEADER_HEIGHT, COLUMN_FOOTER_HEIGHT } from '~/utils/constants'
import Card from './Card/Card'

export default function ListCards() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                p: '0 16px',
                '& .MuiCard-root': {
                    cursor: 'pointer',
                    boxShadow: '0 1px 1px rgba(0,0,0,0.2)'
                },
                '& .MuiTypography-root': {
                    p: 1,
                    fontSize: '0.875rem'
                },
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: (theme) => `calc(
                        ${theme.trello.boardContentHeight} 
                        - ${theme.spacing(5)}
                        - ${COLUMN_HEADER_HEIGHT} - 
                        ${COLUMN_FOOTER_HEIGHT}
                        )`,
                '&::-webkit-scrollbar': {
                    backgroundColor: '#ced0da',
                    borderRadius: '8px',
                    width: '8px'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#a4b0be',
                    borderRadius: '8px'
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#747d8c'
                }
            }}
        >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card test />
            <Card test />
            <Card test />
            <Card test />
            <Card test />
        </Box>
    )
}
