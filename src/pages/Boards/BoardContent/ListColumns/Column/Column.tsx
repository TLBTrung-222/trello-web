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
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { COLUMN_HEADER_HEIGHT, COLUMN_FOOTER_HEIGHT } from '~/utils/constants'
import ListCards from './ListCards/ListCards'
import { Column as ColumnType } from '~/types'
import { mapOrder } from '~/utils/sorts'

interface ColumnProps {
    column: ColumnType
}

export default function Column({ column }: ColumnProps) {
    const orderedCards = mapOrder(column.cards, column.cardOrderIds, '_id')
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
                maxWidth: '300px',
                minWidth: '300px',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
                ml: 2, // 2 * 8 = 16px
                borderRadius: '6px',
                height: 'fit-content',
                maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)}) `
            }}
        >
            {/* Column card header */}
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
                    {column.title}
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

            <ListCards cards={orderedCards} />

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
                <Button startIcon={<AddCardIcon />}>Add new card</Button>

                <IconButton>
                    <Tooltip title="Drag to move">
                        <DragHandle />
                    </Tooltip>
                </IconButton>
            </Box>
        </Box>
    )
}
