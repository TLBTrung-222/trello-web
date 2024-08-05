/// <reference types="vite-plugin-svgr/client" />
import ModeSelect from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Tempates'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'

export default function AppBar() {
    return (
        <Box
            sx={{
                height: (theme) => theme.trello.appBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AppsIcon sx={{ color: 'primary.main' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{ color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
                        Trello
                    </Typography>
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TextField id="outlined-search" label="Search..." type="search" size="small" />
                <ModeSelect />

                {/* Tooltips display informative text when users hover over, focus on, or tap an element.
                 */}
                <Tooltip title="Notifications">
                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <NotificationsNoneIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Help">
                    <IconButton>
                        <HelpOutlineIcon />
                    </IconButton>
                </Tooltip>
                <Profile />
            </Box>
        </Box>
    )
}
