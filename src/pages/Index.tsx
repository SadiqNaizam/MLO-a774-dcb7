import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageContent from '../components/Dashboard/PageContent';

/**
 * LeadsDashboardPage serves as the main view for the leads overview.
 * It utilizes MainAppLayout to provide the consistent administrative interface
 * (sidebar, header) and renders PageContent as its primary content area.
 */
const LeadsDashboardPage: React.FC = () => {
  return (
    <MainAppLayout title="Leads Dashboard">
      {/* PageContent encapsulates all the specific sections of the leads dashboard, 
          such as funnel counts, source charts, leads tracking, and other metrics. */}
      <PageContent />
    </MainAppLayout>
  );
};

export default LeadsDashboardPage;
