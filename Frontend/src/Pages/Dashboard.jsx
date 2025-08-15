import React from 'react';
import { MdPeople, MdBusiness, MdEvent, MdAssessment, MdSecurity, MdSettings, MdTrendingUp, MdAccountBalance } from 'react-icons/md';

const Dashboard = () => {
  const stats = [
    { title: 'Total Employees', value: '1,234', icon: <MdPeople size={24} />, color: 'bg-blue-500', change: '+12%' },
    { title: 'Active Departments', value: '12', icon: <MdBusiness size={24} />, color: 'bg-green-500', change: '+5%' },
    { title: 'This Month Payroll', value: 'Rs. 2.5M', icon: <MdAccountBalance size={24} />, color: 'bg-purple-500', change: '+8%' },
    { title: 'Reports Generated', value: '45', icon: <MdAssessment size={24} />, color: 'bg-orange-500', change: '+15%' },
  ];

  const recentActivities = [
    { action: 'New employee registered', time: '2 hours ago', user: 'Admin', type: 'success' },
    { action: 'Salary processed for March', time: '1 day ago', user: 'System', type: 'info' },
    { action: 'Backup completed', time: '2 days ago', user: 'Admin', type: 'success' },
    { action: 'Department updated', time: '3 days ago', user: 'Manager', type: 'warning' },
  ];

  const quickActions = [
    { name: 'Add New Employee', icon: <MdPeople size={20} />, color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { name: 'Process Salary', icon: <MdAccountBalance size={20} />, color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
    { name: 'Generate Reports', icon: <MdAssessment size={20} />, color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
    { name: 'System Backup', icon: <MdSecurity size={20} />, color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Welcome to Payroll Management System</h3>
        <p className="text-green-100">Manage your organization's payroll, employees, and administrative tasks efficiently.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs text-green-600 font-medium">{stat.change} from last month</p>
              </div>
              <div className={`${stat.color} text-white p-3 rounded-full`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions and Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <MdTrendingUp className="mr-2" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`w-full text-left p-3 rounded-md border transition-colors hover:shadow-sm ${action.bgColor} ${action.borderColor} hover:border-gray-300`}
              >
                <div className="flex items-center">
                  <div className={`${action.color} mr-3`}>
                    {action.icon}
                  </div>
                  <span className="font-medium text-gray-700">{action.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <MdEvent className="mr-2" />
            Recent Activities
          </h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-md bg-gray-50">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time} • {activity.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <MdSettings className="mr-2" />
          System Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Database Status</h4>
            <p className="text-sm text-green-600 font-medium">✓ Connected</p>
            <p className="text-xs text-gray-500">Last backup: 2 hours ago</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">System Version</h4>
            <p className="text-sm text-gray-600">v2.1.0</p>
            <p className="text-xs text-gray-500">Updated: March 2024</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Active Users</h4>
            <p className="text-sm text-gray-600">5 users online</p>
            <p className="text-xs text-gray-500">Max capacity: 50 users</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">98.5%</div>
            <div className="text-sm text-gray-600">System Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">2.3s</div>
            <div className="text-sm text-gray-600">Avg Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">1,247</div>
            <div className="text-sm text-gray-600">Processed Records</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
