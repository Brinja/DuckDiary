import React from 'react';

class GateWay {
  constructor(){
    this.fetchHostData = this.fetchHostData.bind(this);
    this.uploadData = this.uploadData.bind(this);
  }

  diaryInfo = {};
  apiTimeOut = 0;
  //abstract
  getHeader()
  {
    if(new.target == GateWay)
    {
      throw new TypeError("method not implemented");
    }
  }

  //abstract
  getBody()
  {
    if(new.target == GateWay)
    {
      throw new TypeError("method not implemented");
    }
  }

  //abstract
  getEndPoint()
  {
    if(new.target == GateWay)
    {
      throw new TypeError("method not implemented");
    }
  }

  getMethod()
  {
    return 'GET';
  }

  updateDiaryInfo(info)
  {
    this.diaryInfo = info;
  }

  getDiaryInfo()
  {
    return this.diaryInfo;
  }

  setTxnTimeOut()
  {
    this.apiTimeOut = Math.round(new Date().getTime()/1000) + 60;
  }

  checkTxnTimeout()
  {
    if(Math.round(new Date().getTime()/1000)  >= this.apiTimeOut )
    {
      return true;
    }

    return false;
  }


  checkFetchConitnue(msg)
  {
    if(new.target == GateWay)
    {
      throw new TypeError("method not implemented");
    }
  }



  fetchOneTime(url, requestMsg)
  {
    return fetch (url, requestMsg)
    .then((response) => {
      console.log('response : ' + response.status);
      if(response.status == 200)
      {
        return response.json();
      }
      else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then((data) =>{
      //
      //console.log("RESPONSE: ");
      //console.log(data);
      return data;
    }).catch((error) =>{
      console.log('fetchOneTime: ' + error.message);
      throw new Error(error.message);
    });

  }

  wait(delay){
      return new Promise((resolve) => setTimeout(resolve, delay));
  }


  fetchRetry(url, fetchOptions, delay) {
      function onError(err){
          if(this.checkTxnTimeout()){
              throw err;
          }
          return this.wait(delay).then(() => this.fetchRetry(url, fetchOptions, delay));
      }

      return fetch(url,fetchOptions).then((rsp) =>{
        console.log(JSON.stringify(rsp));
        return rsp.json();
      }).then((data) =>{
        if(this.checkFetchConitnue(data))
        {
          return this.wait(delay).then(() => this.fetchRetry(url, fetchOptions, delay));
          //throw new Error('Something went wrong on api server!');
        }
        else{
          return data;
        }

      }).catch(this.onError);
  }



  async processUpload(url, body, hostFunc)
  {
    if(new.target == GateWay)
    {
      throw new TypeError("method not implemented");
    }
  }

  async processToHost()
  {
    const url = this.getEndPoint();
    const body = this.getBody();
    const method = this.getMethod();

    return this.fetchHostData(url, method, body);
  }

  async uploadToHost()
  {
    const url = this.getEndPoint();
    const body = this.getBody();
    const method = this.getMethod();

    return this.uploadData(url, method, body);

  }

  async fetchHostData(url, method, body)
  {
    if( url == null || body == null)
    {
      throw new Error('No data');
    }
    //console.log("url: " + url);
    //console.log("body: " + body);

    let requestMsg = {};

    if(method == 'GET'){
      requestMsg = {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        timeout: 25000,
      };
    }
    else {
      requestMsg = {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        timeout: 25000,
        body: body,
      };
    }


    //console.log('submit to: > ' + url);
    //console.log("fetch" + requestMsg);
    this.setTxnTimeOut();

    return this.fetchRetry(url, requestMsg, 3000).then((data) =>{
      //console.log('fetchRetry data: ' + JSON.stringify(data));
      return data;
    }).then((response) =>{
      return response;
    })
    .catch((e) => {
      console.log('fetchRetry e: ' + e);
      throw e;
    });
  }


  async uploadData(url, method, body)
  {
    if( url == null || body == null)
    {
      throw new Error('No data');
    }

    const requestMsg = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: body,
    };

    console.log('uploadData: > ' + url);

    return fetch(url, requestMsg).then((data) =>{
      console.log('uploadData data: ' + JSON.stringify(data));
      return data.json();
    }).then((response) =>{
      return response;
    })
    .catch((e) => {
      console.log('uploadData e: ' + e);
      throw e;
    });
  }

}

function onProgress(e)
{
  console.log('onProgress');
  const progress = e.loaded / e.total;
  console.log('progress: ' + progress + '%');
}

export default GateWay;
