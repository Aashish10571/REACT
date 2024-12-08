import Student from './student.tsx'

function App() {
  return (
    <>
        <Student name="Aashish Moktan" age={20} isStudent={true} />
        <Student name="Sudip Bhomjan" age={20} isStudent={true} />
        <Student name="Srijana Bajagain" age={19} isStudent={true} />
        <Student name="Suman Moktan" age={24} isStudent={false} />
        <Student name='Prajwal Moktan'/>
    </>
  )
}

export default App
