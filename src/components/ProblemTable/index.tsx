import { ProblemtableProps } from '@/type';
import { Table } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const Problemtable: FC<ProblemtableProps> = ({ problemsData }) => {
  const navigate = useNavigate();

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'sn',
      key: 'sn',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Difficulty',
      dataIndex: 'difficulty',
      key: 'difficulty',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
      render: (link: string) => <a href={link} target="_blank" rel="noopener noreferrer">Visit</a>,
    },
  ];

  const handleRowClick = (record: any) => {
    const urlTitle = encodeURIComponent(record.title.toLowerCase().replace(/\s+/g, '-'));
    navigate(`/problem/${urlTitle}`);
  };

  return (
    <div className={styles.tableContainer}>
      <Table
        columns={columns}
        dataSource={problemsData}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
    </div>
  );
};

export default Problemtable;
