import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
            <div className="flex flex-col items-center space-y-6">
                {/* Spinner */}
                <span className="loading loading-ring loading-lg text-primary"></span>

                {/* Animated Text */}
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 animate-pulse">
                    Please wait, loading content...
                </h1>

                {/* Optional: Progress bar */}
                <progress className="progress progress-primary w-56"></progress>
            </div>
        </div>
    );
};

export default Loading;