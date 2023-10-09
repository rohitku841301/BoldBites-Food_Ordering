const Work = () => {
  return (
    <div>
      <h1>Work</h1>
      <h2>This is work page</h2>
      <div>
        <form>
          <input className="p-2 m-2 border-2 border-black" type="text" placeholder="Name" />
          <input className="p-2 m-2 border-2 border-black" type="text" placeholder="Message" />
          <button className="p-2 m-2 bg-black text-white rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Work;
