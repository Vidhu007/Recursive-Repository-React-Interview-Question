import {useState} from 'react';

const PrintDirectory = ({directories, level=0}) => {
    return (
            <div>
                      {directories.map((parent) => (
                      <div>
                          <h4 style={{paddingLeft:`${20*level}px`}}>
                              {parent.name}
                          </h4>
                          {parent.child && <PrintDirectory directories={parent.child} level={level+1}/>}
                      </div>
                      
                      ))}
            </div>
           );
}

export default function App() {
 const directories = [
    {
      name: 'Desktop',
      child: [
        { name: 'Games' },
        {
          name: 'JS',
          child: [
            { name: 'Scopes' }
          ]
        }
      ]
    },
    { name: 'Documents' },
  ];
    


  return (
      <div>
          <h1>Directory</h1>
     <PrintDirectory directories={directories}/>
      </div>
  );
}
