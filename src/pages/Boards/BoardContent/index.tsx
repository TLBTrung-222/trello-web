import Box from '@mui/material/Box'

export default function BoardContent() {
    return (
        <Box
            sx={{
                height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
                backgroundColor: 'primary.light',
                display: 'flex',
                alignItems: 'center',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
            }}
        >
            Content
        </Box>
    )
}
