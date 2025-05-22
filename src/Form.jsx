import { useRef, useState } from 'react';

function Form({ setDetails, setRegistered }) {
  const [file, setFile] = useState();
  const inputRef = useRef();

  function handleLoad() {
    inputRef.current.click();
  }

  function handleChange(e) {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 512000) {
        alert('FILE TOO BIG');
        return;
      }
      setFile(URL.createObjectURL(file));
    }
  }

  function onDrop(e) {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.size > 512000) {
        alert('FILE SIZE TOO BIG');
        return;
      }
      const fileUrl = URL.createObjectURL(droppedFile);
      setFile(fileUrl);
    }
  }

  function signUp(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataForm = Object.fromEntries(formData);
    let finalPic;
    const profilePic = formData.get('pic');
    if (profilePic && profilePic.size > 0) {
      finalPic = URL.createObjectURL(profilePic);
    } else if (file) {
      finalPic = file;
    }
    const allData = { ...dataForm, pic: finalPic };

    setDetails(allData);
    setRegistered(true);
  }
  return (
    <div className="px-6 py-10">
      <div className="text-center">
        <div className="flex w-full items-center justify-center">
          <div className="w-55">
            <img src="/logo-full.svg" alt="" className="w-10" />
          </div>
        </div>
        <h1 className="mt-10 text-3xl font-semibold">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="mt-5 text-xl text-neutral-400">
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
      {/* FORM BELOW */}
      <form onSubmit={signUp} className="mt-10">
        <div className="mb-8">
          <label htmlFor="pic" className="text-xl">
            Upload Avatar
          </label>
          <div className="mt-3 w-full rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-500 p-4">
            {!file && (
              <div
                className="flex flex-col items-center justify-center"
                onDrop={onDrop}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
              >
                <div
                  onClick={handleLoad}
                  className="rounded-xl border-1 border-neutral-300 bg-neutral-500 p-3"
                >
                  <img src="/icon-upload.svg" alt="" />
                </div>
                <p className="text-md mt-5 text-center text-neutral-400">
                  Drag and drop or click to upload
                </p>
              </div>
            )}
            {file && (
              <div className="flex flex-col items-center gap-4">
                <div className="h-15 w-15 overflow-hidden rounded-xl border-2 border-neutral-300">
                  <img src={file} alt="" />
                </div>
                <div className="flex flex-row justify-center gap-3">
                  <button
                    type="button"
                    className="rounded-md bg-neutral-300 px-2 py-1 text-xs"
                    onClick={() => {
                      setFile('');
                    }}
                  >
                    Remove image
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-neutral-300 px-2 text-xs"
                    onClick={handleLoad}
                  >
                    Change image
                  </button>
                </div>
              </div>
            )}
            <input
              type="file"
              name="pic"
              id="pic"
              accept="image/png, image/jpeg"
              ref={inputRef}
              className="hidden"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 flex flex-row items-center gap-2">
            <div className="h-5 w-5">
              <img src="/icon-info.svg" alt="" />
            </div>
            <p className="text-xs text-neutral-400">
              Upload your photo (JPG or PNG, max size: 500Kb).
            </p>
          </div>
        </div>
        <div className="mb-8">
          <label htmlFor="name" className="text-xl">
            Full Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="mt-3 w-full rounded-xl border-2 border-neutral-300 bg-neutral-500 p-3 text-white"
            placeholder="Rob Pelinka"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="mail" className="text-xl">
            Email Adress
          </label>
          <br />
          <input
            type="email"
            id="mail"
            name="mail"
            className="mt-3 w-full rounded-xl border-2 border-neutral-300 bg-neutral-500 p-3 text-white"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="github" className="text-xl">
            GitHub Username
          </label>
          <br />
          <input
            type="text"
            name="github"
            id="github"
            className="mt-3 w-full rounded-xl border-2 border-neutral-300 bg-neutral-500 p-3 text-white"
            placeholder="Username"
            required
          />
        </div>
        <button
          className="w-full rounded-xl bg-orange-700 p-3 text-xl font-bold text-black"
          type="submit"
        >
          Generate My Ticket
        </button>
      </form>
    </div>
  );
}

export default Form;
