import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import HomePage from '../pages/HomePage'
import PlaceholderPage from '../pages/PlaceholderPage'

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles" element={<PlaceholderPage eyebrow="The collection" title="Find your next way to move." copy="Vehicle discovery is coming next. For now, explore the Rydlo point of view." />} />
        <Route path="/login" element={<PlaceholderPage eyebrow="Welcome back" title="Your journeys, in one place." copy="Account access will be available in a future release." />} />
        <Route path="/register" element={<PlaceholderPage eyebrow="Join Rydlo" title="Make every trip yours." copy="Create an account when the Rydlo marketplace opens in your city." />} />
        <Route path="/list-your-vehicle" element={<PlaceholderPage eyebrow="For owners" title="Share the way you move." copy="Owner onboarding is being thoughtfully prepared for launch." />} />
        <Route path="*" element={<PlaceholderPage eyebrow="404" title="That road does not exist." copy="Return home and find a better route." />} />
      </Routes>
    </SiteLayout>
  )
}

export default App
