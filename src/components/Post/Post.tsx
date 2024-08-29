import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import frontmatter from 'remark-frontmatter';

import { Frontmatter, Post as PostType } from '../../types';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface PostProps {
  post: PostType<Frontmatter>;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <div className="text-center mb-4">
        <h1 className="text-7xl font-bold uppercase text-blue-700">
          {post.frontmatter.company.name}
        </h1>
        <Link
          to={post.frontmatter.company.website}
          target="_blank"
          rel="nofollow external"
        >
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Visit{' '}
            {post.frontmatter.company.website
              ?.replace('https://', '')
              ?.replace('http://', '')}
          </button>
        </Link>
      </div>
      <div className="container flex flex-col mx-auto p-6 bg-gray-100 rounded-lg shadow-lg text-black">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="flex-1 md:mr-6">
            <h2 className="text-xl font-semibold mb-2">Job Overview</h2>
            <p className="text-gray-700">
              <strong>Role:</strong> {post.frontmatter.job.role}
            </p>
            <p className="text-gray-700">
              <strong>Start Date:</strong>{' '}
              {post.frontmatter.job.dates.start.toLocaleDateString('en-AU')}
            </p>
            <p className="text-gray-700">
              <strong>Summary:</strong> {post.frontmatter.job.summary}
            </p>

            <h3 className="text-lg font-semibold mt-4">Responsibilities:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {post.frontmatter.job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mt-4">Skills:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {post.frontmatter.job.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Company Location</h3>
            <MapContainer
              style={{ width: '100%', height: '100vh' }}
              center={[
                post.frontmatter.company.location.lat,
                post.frontmatter.company.location.long,
              ]}
              zoom={17}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  post.frontmatter.company.location.lat,
                  post.frontmatter.company.location.long,
                ]}
              >
                <Popup>
                  <p className="text-gray-700 mt-2">
                    <span className="font-bold">
                      {post.frontmatter.company.name}
                    </span>
                    <br />
                    {post.frontmatter.company.address.street},{' '}
                    {post.frontmatter.company.address.city},{' '}
                    {post.frontmatter.company.address.state}{' '}
                    {post.frontmatter.company.address.postcode},{' '}
                    {post.frontmatter.company.address.country}
                  </p>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <ReactMarkdown
            children={post.content}
            remarkPlugins={[frontmatter]}
          />
        </div>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <pre className="bg-gray-800 text-white p-4 rounded">
          <code>{JSON.stringify(post.frontmatter, null, 2)}</code>
        </pre>
      )}
    </>
  );
};
