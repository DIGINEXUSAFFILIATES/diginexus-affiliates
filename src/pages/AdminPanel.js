import AdminAnalytics from "../components/AdminAnalytics";
import UserReports from "../components/UserReports";
import TransactionHistory from "../components/TransactionHistory";
import FeedbackSystem from "../components/FeedbackSystem";

const AdminPanel = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <AdminAnalytics />
      <UserReports />
      <TransactionHistory />
      <FeedbackSystem />
    </div>
  );
};

export default AdminPanel;
