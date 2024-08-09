import Box from '@mui/material/Box'
import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import AddCardIcon from '@mui/icons-material/AddCard'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandle from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import { Attachment, ModeComment } from '@mui/icons-material'

// use fixed-length for header column and footer column height
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '50px'

export default function BoardContent() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box
            sx={{
                height: (theme) => theme.trello.boardContentHeight,
                backgroundColor: 'primary.light',
                display: 'flex',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                p: '10px 0'
            }}
        >
            {/* Box column 01 */}
            <Box
                sx={{
                    maxWidth: '300px',
                    minWidth: '300px',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
                    ml: 2, // 2 * 8 = 16px
                    borderRadius: '6px',
                    height: 'fit-content',
                    maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)}) `
                }}
            >
                {/* Column header */}
                <Box
                    sx={{
                        height: COLUMN_HEADER_HEIGHT,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant="h6"
                        fontSize="1rem"
                        sx={{
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Column Title
                    </Typography>
                    <Box>
                        {/* IconButton make it more aesthetic */}
                        <Tooltip title="More options">
                            <IconButton onClick={handleClick}>
                                <ExpandMoreIcon
                                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                                    id="basic-column-dropdown"

                                    // component={}
                                />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            id="basic-menu-dropdown"
                            anchorEl={anchorEl} // anchor element refer to the button above
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <AddCardIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Add new card</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCopy fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Copy</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentPaste fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Paste</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <DeleteForeverIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Remove this column</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Cloud fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Archieve this column</ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

                {/* Column card list */}
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
                    <Card sx={{ overflow: 'unset' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://picsum.photos/id/20/200/300"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography>Trung TLB</Typography>
                        </CardContent>
                        <CardActions sx={{ p: '0 4px 8px 4px' }}>
                            <Button size="small" startIcon={<GroupIcon />}>
                                20
                            </Button>
                            <Button size="small" startIcon={<ModeComment />}>
                                20
                            </Button>
                            <Button size="small" startIcon={<Attachment />}>
                                20
                            </Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ overflow: 'unset' }}>
                        <CardContent>
                            <Typography>Card 01</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ overflow: 'unset' }}>
                        <CardContent>
                            <Typography>Card 01</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ overflow: 'unset' }}>
                        <CardContent>
                            <Typography>Card 01</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ overflow: 'unset' }}>
                        <CardContent>
                            <Typography>Card 01</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ overflow: 'unset' }}>
                        <CardContent>
                            <Typography>Card 01</Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Column card footer */}
                <Box
                    sx={{
                        height: COLUMN_FOOTER_HEIGHT,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button
                        startIcon={<AddCardIcon />}
                        sx={{
                            color: '#3742fa'
                        }}
                    >
                        Add new card
                    </Button>

                    <IconButton>
                        <Tooltip title="Drag to move">
                            <DragHandle />
                        </Tooltip>
                    </IconButton>
                </Box>
            </Box>

            {/* Box column 02 */}
            <Box
                sx={{
                    maxWidth: '300px',
                    minWidth: '300px',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
                    ml: 2, // 2 * 8 = 16px
                    borderRadius: '6px',
                    height: 'fit-content',
                    maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)}) `
                }}
            >
                {/* Column header */}
                <Box
                    sx={{
                        height: COLUMN_HEADER_HEIGHT,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant="h6"
                        fontSize="1rem"
                        sx={{
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Column Title
                    </Typography>
                    <Box>
                        {/* IconButton make it more aesthetic */}
                        <Tooltip title="More options">
                            <IconButton onClick={handleClick}>
                                <ExpandMoreIcon
                                    sx={{ color: 'text.primary', cursor: 'pointer' }}
                                    id="basic-column-dropdown"

                                    // component={}
                                />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            id="basic-menu-dropdown"
                            anchorEl={anchorEl} // anchor element refer to the button above
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <AddCardIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Add new card</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCopy fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Copy</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <ContentPaste fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Paste</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <DeleteForeverIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Remove this column</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Cloud fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Archieve this column</ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

                {/* Column card list */}
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
                    <Card sx={{ overflow: 'unset' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://picsum.photos/id/20/200/300"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography>Trung TLB</Typography>
                        </CardContent>
                        <CardActions sx={{ p: '0 4px 8px 4px' }}>
                            <Button size="small" startIcon={<GroupIcon />}>
                                20
                            </Button>
                            <Button size="small" startIcon={<ModeComment />}>
                                20
                            </Button>
                            <Button size="small" startIcon={<Attachment />}>
                                20
                            </Button>
                        </CardActions>
                    </Card>
                </Box>

                {/* Column card footer */}
                <Box
                    sx={{
                        height: COLUMN_FOOTER_HEIGHT,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button
                        startIcon={<AddCardIcon />}
                        sx={{
                            color: '#3742fa'
                        }}
                    >
                        Add new card
                    </Button>

                    <IconButton>
                        <Tooltip title="Drag to move">
                            <DragHandle />
                        </Tooltip>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}
