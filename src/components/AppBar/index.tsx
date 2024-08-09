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
import Templates from './Menus/Templates'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import Button from '@mui/material/Button'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'

export default function AppBar() {
    const [searchValue, setSearchValue] = React.useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(e.target.value)
    }
    const handleClear = () => {
        setSearchValue('')
    }

    return (
        <Box
            sx={{
                height: (theme) => theme.trello.appBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AppsIcon sx={{ color: 'white' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
                    <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                        Trello
                    </Typography>
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                    <Button
                        variant="outlined"
                        startIcon={<LibraryAddIcon />}
                        sx={{
                            color: 'white',
                            border: 'none',
                            '&:hover': {
                                border: 'none'
                            }
                        }}
                    >
                        Create
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TextField
                    id="outlined-search"
                    label="Search..."
                    type="text"
                    size="small"
                    value={searchValue}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <IconButton onClick={handleClear}>
                                <ClearIcon sx={{ color: searchValue ? 'white' : 'transparent' }} />
                            </IconButton>
                        )
                    }}
                    sx={{
                        maxWidth: '170px',
                        '& label': { color: 'white' },
                        '& label.Mui-focused': { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' }, // Targets the fieldset element inside the OutlinedInput.
                            '&:hover fieldset': { borderColor: 'white' }, // Changes the border color when the TextField is hovered.
                            '&.Mui-focused fieldset': { borderColor: 'white' }, // Changes the border color when the TextField is focused.
                            '& input': { color: 'white' }, // Ensures the input text color is white.
                            '& .MuiInputAdornment-root svg': { color: 'white' } // Ensures the icons are white.
                        }
                    }}
                />
                <ModeSelect />

                {/* Tooltips display informative text when users hover over, focus on, or tap an element.
                 */}
                <Tooltip title="Notifications">
                    <IconButton>
                        <Badge badgeContent={4} color="warning">
                            <NotificationsNoneIcon sx={{ color: 'white' }} />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Help">
                    <IconButton>
                        <HelpOutlineIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Tooltip>
                <Profile />
            </Box>
        </Box>
    )
}
