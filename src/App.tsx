import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useMediaQuery } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

type Mode = 'light' | 'dark' | 'system'

function ModeSelect() {
    const { mode, setMode } = useColorScheme()

    const handleChange = (event: SelectChangeEvent) => {
        const selectedMode = event.target.value as Mode
        console.log(selectedMode)
        setMode(selectedMode)
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
            <Select
                labelId="label-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <LightModeIcon fontSize="small" /> Light
                    </div>
                </MenuItem>
                <MenuItem value="dark">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <DarkModeIcon />
                        Dark
                    </div>
                </MenuItem>
                <MenuItem value="system">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <SettingsBrightnessIcon />
                        System
                    </div>
                </MenuItem>
            </Select>
        </FormControl>
    )
}

function ModeToggle() {
    const { mode, setMode } = useColorScheme()
    const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    console.log('preferDarkMode: ' + preferDarkMode)
    return (
        <Button
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light')
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    )
}

function App() {
    return (
        <>
            <ModeSelect />
            <hr />
            <ModeToggle />
            <hr />
            <AccessAlarmIcon />
            <ThreeDRotation />
            <div>Trung dep zai</div>
            <Typography variant="body2" color="text.secondary">
                Test typography
            </Typography>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </>
    )
}

export default App
