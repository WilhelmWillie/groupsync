const CreateForm = () => {
  return (
    <div>
      <h1>Create GroupSync</h1>

      <form>
        <label>Group Name</label>
        <input type='text' placeholder='The Boys' />

        <br />

        <label>Group Goal</label>
        <input type='text' placeholder='Plan trip to NYC' />

        <hr/>

        <label>Your Name</label>
        <input type='text' placeholder='Peter Parker' />

        <br />

        <label>Phone #</label>
        <input type='text' placeholder='(555) 123-4567' />

        <br />

        <button>Go</button>
      </form>
    </div>
  )
}

export default CreateForm
