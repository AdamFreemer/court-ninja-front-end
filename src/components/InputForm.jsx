import React from 'react';
import FormField from '../components/FormField'

export default function InputForm(props) {
  function handleSubmit() {
    alert("How rude!");
  }

  let fields = [
    { name: 'Player 1', id: 'player1' },
    { name: 'Player 2', id: 'player2' },
    { name: 'Player 3', id: 'player3' },
    { name: 'Player 4', id: 'player4' },
    { name: 'Player 5', id: 'player5' },
    { name: 'Player 6', id: 'player6' },
    { name: 'Pldfgr 7', id: 'player7' },
    { name: 'Player 8', id: 'player8' },
    { name: 'sdfgdsh', id: 'player9' },
  ]

  return (
    <div className="container mx-auto sm:px-3 lg:px-2 py-8">

      <form>
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">Enter Player Names</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              After entering player names, click submit to generate a tournament.
            </p>
          </div>

          <div className="border-b border-white/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {fields.map((field) => (
                <FormField fieldName={field.name} fieldId={field.id} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-white" >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}