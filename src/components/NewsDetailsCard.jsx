import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const {
        title,
        author,
        published_date,
        thumbnail_url,
        details,
        total_view,
        rating,
    } = news;

    const formattedDate = new Date(published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="card bg-base-100 shadow-xl mb-8">
            <figure>
                <img
                    src={thumbnail_url}
                    alt="News Thumbnail"
                    className="w-full object-cover h-60"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">
                    {title}
                    {rating?.badge && (
                        <div className="badge badge-warning text-white ml-2 capitalize">
                            {rating.badge}
                        </div>
                    )}
                </h2>

                <p className="text-sm text-gray-500 mb-2">
                    Published on:{' '}
                    <span className="font-medium text-gray-700">{formattedDate}</span>
                </p>

                <p className="text-gray-700 text-sm leading-relaxed">
                    {details}
                </p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                        <img
                            src={author?.img}
                            alt={author?.name}
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-800">
                            {author?.name}
                        </span>
                    </div>
                    <div className="text-sm text-gray-500">
                        👁️ {total_view?.toLocaleString()} views
                    </div>
                </div>

                <div className="mt-6">
                    <Link to={`/category/${news.category_id}`} className="btn btn-error text-white btn-sm">
                        ⬅ All news in this category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
