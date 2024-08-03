import Box from '@mui/material/Box'

export default function BoardContent() {
    return (
        <Box
            sx={{
                height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
                backgroundColor: 'primary.light',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            Content
        </Box>
    )
}
