import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'

export default function AppBar() {
    return (
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
    )
}
