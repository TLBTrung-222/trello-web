import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import DashBoardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
    color: 'white',
    backgroundColor: 'transparent',
    borderRadius: '4px',
    border: 'none',
    px: '5px',
    '& .MuiSvgIcon-root': {
        color: 'white'
    },
    '&:hover': {
        backgroundColor: 'primary.50'
    }
}

export default function BoardBar() {
    return (
        <Box
            sx={{
                width: '100%',
                height: (theme) => theme.trello.boardBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px soliid #00bfa5',
                px: 2,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                borderBottom: '1px solid #7f8c8d'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip icon={<DashBoardIcon />} label="TrungTLB Board" clickable sx={MENU_STYLE} />

                <Chip icon={<VpnLockIcon />} label="Public/Private Board" clickable sx={MENU_STYLE} />

                <Chip icon={<AddToDriveIcon />} label="Add to Google Drive" clickable sx={MENU_STYLE} />

                <Chip icon={<BoltIcon />} label="Automation" clickable sx={MENU_STYLE} />
                <Chip icon={<FilterListIcon />} label="Automation" clickable sx={MENU_STYLE} />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<PersonAddIcon />}
                    sx={{ borderColor: 'white', '&:hover': { borderColor: 'white' } }}
                >
                    Invite
                </Button>

                <AvatarGroup
                    sx={{
                        gap: '10px',
                        '& .MuiAvatar-root': {
                            width: '32px',
                            height: '32px',
                            border: 'none'
                        }
                    }}
                    max={4}
                >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </Box>
        </Box>
    )
}
