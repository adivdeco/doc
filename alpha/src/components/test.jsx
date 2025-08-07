import { useState, useEffect } from "react"
import { NavLink } from "react-router"


export default function Test() {
    const [showNameList, setShowNameList] = useState(false)
    const [searchName, setSearchName] = useState('')
    const [filterName, setFilterName] = useState([])
    const name = ["a", "b", "c", "d", "e", "f"]

    useEffect(() => {
        if (searchName.trim() === '') {
            setFilterName(name);
        } else {
            const filter = name.filter(nme => nme.toLowerCase().includes(searchName.toLowerCase()));
            setFilterName(filter)
        }
    }, [searchName])


    return (
        <div
            className="flex justify-center items-center text-white h-screen bg-gray-700"
        >
            <div>
                <button
                    className=" p-1 rounded-3xl bg-amber-300/70 items-center gap-1 hover:text-yellow-400 transition"
                    onClick={() => setShowNameList(!showNameList)}
                >
                    dropdown
                </button>

                <div className="space-y-1 mt-6 problems-dropdown max-h-[60vh] overflow-y-auto">
                    {showNameList && (

                        <div className="absolute  mt-2 w-64 max-h-[70vh] overflow-y-auto bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50">
                            <div className="p-2">
                                <input
                                    type="text"
                                    placeholder="search.."
                                    value={searchName}
                                    className="w-full px-3 py-2 mb-2 text-sm bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    onChange={(e) => {
                                        setSearchName(e.target.value)
                                    }}
                                />

                                <div className="space-y-1 problems-dropdown max-h-[60vh] overflow-y-auto">
                                    {filterName.length > 0 ? (
                                        filterName.map((each) => (

                                            <div className="flex justify-between items-center">
                                                <span className="truncate bg-amber-400/30 border border-yellow-400 w-full flex rounded-3xl mt-1 justify-center">{each}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-3 py-2 text-sm text-gray-400">
                                            No problems found matching "{searchName}"
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}