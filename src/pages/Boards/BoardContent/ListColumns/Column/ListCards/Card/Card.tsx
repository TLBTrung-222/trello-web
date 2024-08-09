import Typography from '@mui/material/Typography'
import MuiCard from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import { Attachment, ModeComment } from '@mui/icons-material'

type props = {
    test?: boolean
}

export default function Card({ test }: props) {
    if (test) {
        return (
            <MuiCard sx={{ overflow: 'unset' }}>
                <CardContent>
                    <Typography>Card test</Typography>
                </CardContent>
            </MuiCard>
        )
    }
    return (
        <MuiCard sx={{ overflow: 'unset' }}>
            <CardMedia sx={{ height: 140 }} image="https://picsum.photos/id/20/200/300" title="green iguana" />
            <CardContent>
                <Typography>Card with media</Typography>
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
        </MuiCard>
    )
}
