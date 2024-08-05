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
    color: 'primary.main',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: 'none',
    px: '5px',
    '& .MuiSvgIcon-root': {
        color: 'primary.main'
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
                gap: 2,
                borderTop: '1px soliid #00bfa5',
                px: 2
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
                <Button variant="outlined" startIcon={<PersonAddIcon />}>
                    Invite
                </Button>

                <AvatarGroup
                    sx={{
                        '& .MuiAvatar-root': {
                            width: '34px',
                            height: '34px'
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
