import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { Section } from '../components/Section/Section';
import { CodeStatsService } from '../services/codeStatsService';
import { CodeStatsResponse } from '../types';

const data = [
  { name: 'Page A', amt: 1400 },
  { name: 'Page B', amt: 2300 },
];

const renderBarChar = (response?: CodeStatsResponse | null) => {
  if (!response) return <></>;
  let d = CodeStatsService.getLevelPerLanguage(response);
  console.log({ d });
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={d}
        margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
        barCategoryGap={20}
      >
        <XAxis dataKey="name" fontSize={'8px'} />
        <Tooltip />
        <Legend />
        <Bar dataKey={'level'} stroke="#8884d8" barSize={5} color="#FFcc44" />
      </BarChart>
    </ResponsiveContainer>
  );
};
const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="amt" stroke="#8884d8" />
  </LineChart>
);

interface StatsPageProps {}
export const StatsPage: React.FC<StatsPageProps> = () => {
  const [stats, setStats] = useState<CodeStatsResponse | null>();

  useEffect(() => {
    const getStats = async () =>
      setStats(await CodeStatsService.getStats('tomek-i'));
    getStats();
  }, []);

  return (
    <>
      <Section>
        <Section.Wrapper>
          <Section.Title title="section 1" />
          <p>github commit stats</p>
          <p className="py-4 pl-4 bg-white rounded ">
            <img src="http://ghchart.rshah.org/tomek-i" alt="My Github chart" />
          </p>
          <p>
            or use and scrape : https://github.com/users/tomek-i/contributions{' '}
          </p>
        </Section.Wrapper>
      </Section>

      <Section className="spikes">
        <Section.Wrapper>
          <Section.Title title="section 3" />
          <p>code:stats</p>
          <p>https://recharts.org/en-US</p>
          {renderLineChart}
          <p>LEVEL: {CodeStatsService.calculateLevel(stats?.total_xp)}</p>
          <p>{JSON.stringify(stats?.languages)}</p>
          <div>{renderBarChar(stats)}</div>
          {/* <p>{JSON.stringify(stats)}</p> */}
        </Section.Wrapper>
      </Section>
    </>
  );
};
