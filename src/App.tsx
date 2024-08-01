import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

function App() {
    return (
        <>
            <AccessAlarmIcon />
            <ThreeDRotation />
            <div>Trung dep zai</div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </>
    )
}

export default App
