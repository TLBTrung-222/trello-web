import Typography from '@mui/material/Typography'
import MuiCard from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import { Attachment, ModeComment } from '@mui/icons-material'
import { Card as CardType } from '~/types'

type CardProps = {
    card: CardType
}

export default function Card({ card }: CardProps) {
    const shouldShowCardAction = () => {
        return !!card.memberIds.length || !!card.comments.length || !!card.attachments.length
    }

    return (
        <MuiCard sx={{ overflow: 'unset' }}>
            {card.cover && <CardMedia sx={{ height: 140 }} image={card.cover} />}

            <CardContent>
                <Typography>{card.title}</Typography>
            </CardContent>
            {shouldShowCardAction() && (
                <CardActions sx={{ p: '0 4px 8px 4px' }}>
                    <Button size="small" startIcon={<GroupIcon />}>
                        {card.memberIds.length}
                    </Button>
                    <Button size="small" startIcon={<ModeComment />}>
                        {card.comments.length}
                    </Button>
                    <Button size="small" startIcon={<Attachment />}>
                        {card.attachments.length}
                    </Button>
                </CardActions>
            )}
        </MuiCard>
    )
}
