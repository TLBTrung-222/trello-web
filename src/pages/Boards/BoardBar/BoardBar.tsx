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
import { Board } from '~/types'
import { capitalizeFirstLetter } from '~/utils/formatter'

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

type BoardBarProps = {
    board: Board
}

export default function BoardBar({ board }: BoardBarProps) {
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
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip icon={<DashBoardIcon />} label={board.title} clickable sx={MENU_STYLE} />

                <Chip icon={<VpnLockIcon />} label={capitalizeFirstLetter(board?.type)} clickable sx={MENU_STYLE} />

                <Chip icon={<AddToDriveIcon />} label="Add to Google Drive" clickable sx={MENU_STYLE} />

                <Chip icon={<BoltIcon />} label="Automation" clickable sx={MENU_STYLE} />
                <Chip icon={<FilterListIcon />} label="Automation" clickable sx={MENU_STYLE} />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<PersonAddIcon />}
                    sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
                >
                    Invite
                </Button>

                <AvatarGroup
                    sx={{
                        gap: '10px',
                        '& .MuiAvatar-root': {
                            width: '32px',
                            height: '32px',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            // target the surplus avatar
                            '&:first-of-type': {
                                bgcolor: '#a4b0be'
                            }
                        }
                    }}
                    max={4}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src="https://picsum.photos/id/1/200/300
"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://picsum.photos/id/235/200/300
"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://picsum.photos/id/237/200/300
"
                    />
                    <Avatar alt="Agnes Walker" src="https://picsum.photos/200/300" />
                    <Avatar alt="Trevor Henderson" src="https://picsum.photos/200/300" />
                </AvatarGroup>
            </Box>
        </Box>
    )
}
