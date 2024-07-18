import { useEffect, useState } from 'react'
import JobsInfo from './JobsInfo'
import BtnContainer from './BtnContainer'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchJobsData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setJobs(data)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchJobsData()
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      <JobsInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}
export default App
