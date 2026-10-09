const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-lamaSkyLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Adapting Together for an AI-Transformed Future</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2026-01-01
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Strengthen students' AI literacy throughout their education journey 
                    </p>
                </div>
                <div className="bg-lamaPurpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Working Together for a Stronger Education System</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2026-01-01
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        More support for Mother Tongue Language Learning and Promotion Committees (MTLLPCs) to strengthen bilingualism  
                    </p>
                </div>
                <div className="bg-lamaYellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">New Post-Secondary Admissions Exercise in 2028</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                            2026-01-01
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        With the common Singapore-Cambridge Secondary Education Certificate (SEC) examination from 2027, secondary students can use their SEC examination results to apply for various post-secondary pathways at the same time when they receive their results in January 2028.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Announcements