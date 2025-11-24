import React, { useState } from 'react'
import data from './data'
import './styles.css'

const Accordian = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  // Handle single selection
  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id)
  }

  // Handle multiple selection
  function handleMultiSelection(id) {
    let copyMultiple = [...multiple]
    const findIndexOfCurrentId = copyMultiple.indexOf(id)

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(id)
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1)
    }

    setMultiple(copyMultiple)
  }

  return (
    <div className='wrapper'>
      <div className='accordian'>

        {/* Toggle button */}
        <button
          className='toggle-btn'
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
        </button>

        {/* Accordion items */}
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            const isOpen = enableMultiSelection
              ? multiple.includes(dataItem.id)
              : selected === dataItem.id

            return (
              <div key={dataItem.id} className='item'>
                <div
                  className='title'
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>{isOpen ? '-' : '+'}</span>
                </div>

                {isOpen ? (
                  <div className='content'>
                    <p>{dataItem.answer}</p>
                  </div>
                ) : null}
              </div>
            )
          })
        ) : (
          <div className='empty'>
            <h3>No Data Found</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordian;
