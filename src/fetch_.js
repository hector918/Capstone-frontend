const API = process.env.REACT_APP_API_URL;

let default_fetch_options = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/x-www-form-urlencoded",
};

function error_handle(error) {
  console.log(error);
}

function download_file(fileHash, callback) {
  fetch(`${API}/download_file/${fileHash}`)
    .then(response => response.blob())
    .then(blob => {
      callback(blob);
    })
    .catch(error => {
      error_handle('Error downloading file:' + error.toString());
      callback(false);
    });
}

function read_file_metadata(fileHash, callback){
  fetch(`${API}/download_file/meta/${fileHash}`)
    .then(response => response.json())
    .then(json => {
      callback(json);
    })
    .catch(error => {
      error_handle( error );
      callback(false);
    })
}

function question_to_reading_comprehension(fileHash, q, callback) {
  const body = {
    method: "POST",
    body: new URLSearchParams({ q, fileHash }),
    headers: {
      ...default_fetch_options,
    },
  };
  fetch(`${API}/rc`, body)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch(error_handle);
}

function upload_file(files, callback) {
  const formData = new FormData();
  for (let i = 0; i < files.files.length; i++) {
    formData.append("files", files.files[i]);
  }
  const body = {
    method: "POST",
    body: formData,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  fetch(`${API}/upload_files`, body)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch(error_handle);
}

function read_text_to_image(q, callback) {
  const body = {
    method: "POST",
    body: new URLSearchParams({ q }),
    headers: {
      ...default_fetch_options,
    },
  };
  fetch(`${API}/ra/image`, body)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch(error_handle);
}

function read_text_to_explaination(q, callback) {
  const body = {
    method: "POST",
    body: new URLSearchParams({ q }),
    headers: {
      ...default_fetch_options,
    },
  };
  fetch(`${API}/ra/text`, body)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch(error_handle);
}

function getFileContent(fileHash) {
  return fetch(`${API}/download_file/${fileHash}`)
    .then(response => {
      if (response.ok) {
        return response.text(); // Use response.text() to retrieve the file content as text
      } else {
        throw new Error('Failed to get file content');
      }
    })
    .catch(error => {
      console.error('Error getting file content:', error);
      return null;
    });
}



const storageFunctions = {
  download_file,
  read_file_metadata,
  question_to_reading_comprehension,
  upload_file,
  read_text_to_image,
  read_text_to_explaination,
  getFileContent,
};

export default storageFunctions;


