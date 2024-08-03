// Board details
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ModeSelect from '../../components/ModeSelect'

function Board() {
    return (
        <Container disableGutters={true} maxWidth={false} sx={{ height: '100vh' }}>
            <Box
                sx={{
                    height: (theme) => theme.trello.appBarHeight,
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <ModeSelect />
            </Box>
            <Box
                sx={{
                    height: (theme) => theme.trello.boardBarHeight,
                    backgroundColor: 'primary.dark',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                Board Bar
            </Box>
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
        </Container>
    )
}

export default Board
