import React, { useState, useEffect } from 'react';
import './style.css';

// 图标组件
const Icons = {
  shop: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  dashboard: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  transactions: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  payouts: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  disputes: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  reports: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  settings: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  help: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  external: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  arrowUp: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"/>
      <polyline points="5 12 12 5 19 12"/>
    </svg>
  ),
  arrowDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <polyline points="19 12 12 19 5 12"/>
    </svg>
  ),
  close: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  edit: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
};

// 导航项
const navItems = [
  { id: 'overview', labelKey: 'overview', icon: 'dashboard' },
  { id: 'transactions', labelKey: 'transactions', icon: 'transactions' },
  { id: 'payouts', labelKey: 'payouts', icon: 'payouts' },
  { id: 'disputes', labelKey: 'disputes', icon: 'disputes' },
  { id: 'reports', labelKey: 'reports', icon: 'reports' },
  { id: 'settings', labelKey: 'settings', icon: 'settings' },
];

// 模拟数据
const mockData = {
  shopId: 'b2b7f4c9e1d3',
  balance: {
    withdrawable: 0.00,
    available: 0.00,
    frozen: 0.00,
    pending: 0.00,
    deposit: 0.00,
  },
  transactions: {
    orders: { amount: 0.00, count: 0 },
    refunds: { amount: 0.00, count: 0 },
    disputes: { amount: 0.00, count: 0 },
  },
  payouts: {
    total: 0.00,
    count: 0,
    nextScheduled: '2026/06/11',
  },
};

// 多语言文案
const translations = {
  en: {
    overview: 'Overview',
    transactions: 'Transactions',
    payouts: 'Payouts',
    disputes: 'Disputes',
    reports: 'Reports',
    settings: 'Settings',
    'return to shop': 'Back to Shop',
    pending: 'Pending',
    'status text pending': 'Under Review',
    'title pending': 'Contract Renewal Application Submitted',
    'desc pending': 'Please wait for review. You can continue using payment services during the review period. To check review progress, you can view details anytime.',
    returned: 'Returned',
    'status text returned': 'Returned',
    'title returned': 'Contract Renewal Application Returned',
    'desc returned': 'Your application materials need modification. Please adjust according to the review comments and resubmit.',
    rejected: 'Rejected',
    'status text rejected': 'Rejected',
    'title rejected': 'Contract Renewal Application Rejected',
    'desc rejected': 'We apologize, your contract renewal application has been rejected due to risk factors. If you have any questions, please contact your account manager.',
    approved: 'Approved',
    'status text approved': 'Approved',
    'title approved': 'Contract Renewal Application Approved',
    'desc approved': 'Congratulations! Your contract renewal application has been approved. After completing other configurations such as payment methods, click the "Confirm Contract Renewal" button on the Store-Settings-Payments page to complete the renewal.',
    'company basic info': 'Company Basic Information',
    'company representative': 'Company Representative',
    'company owners': 'Company Owners',
    'business information': 'Business Information',
    'bank account': 'Bank Account',
    'company type': 'Company Type',
    'country/region': 'Country/Region',
    'employer identification number': 'Employer Identification Number (EIN)',
    'company registered name': 'Company Registered Name',
    'contact phone': 'Contact Phone',
    'representative type': 'Representative Type',
    'legal representative': 'Legal Representative',
    'document type': 'Document Type',
    'passport': 'Passport',
    'document number': 'Document Number',
    'issue date': 'Issue Date',
    'expiration date': 'Expiration Date',
    'upload document': 'Upload Document',
    'beneficial owner': 'Beneficial Owner',
    'ownership percentage': 'Ownership Percentage',
    'personal information': 'Personal Information',
    'date of birth': 'Date of Birth',
    'nationality': 'Nationality',
    'country of residence': 'Country of Residence',
    'address': 'Address',
    'city': 'City',
    'state/province': 'State/Province',
    'zip code': 'ZIP Code',
    'business name': 'Business Name',
    'business address': 'Business Address',
    'business phone': 'Business Phone',
    'business email': 'Business Email',
    'website': 'Website',
    'estimated annual revenue': 'Estimated Annual Revenue',
    'number of employees': 'Number of Employees',
    'business description': 'Business Description',
    'withdrawal currency': 'Withdrawal Currency',
    'account name': 'Account Name',
    'ACH routing number': 'ACH Routing Number',
    'bank account number': 'Bank Account Number',
    'upload bank proof': 'Upload Bank Proof',
    'submit materials': 'Submit Materials',
    'confirm': 'Confirm',
    'cancel': 'Cancel',
    'edit': 'Edit',
    'save': 'Save',
    'agree terms': 'I have read and agree to the Terms of Service',
    'agree privacy': 'I have read and agree to the Privacy Policy',
    'view details': 'View Details',
    'resubmit': 'Resubmit',
    'confirm contract': 'Confirm Contract Renewal',
    'total': 'Total',
    'available': 'Available',
    'frozen': 'Frozen',
    'deposit': 'Deposit',
    'orders': 'Orders',
    'refunds': 'Refunds',
    'next payout': 'Next Payout',
    'payment method name': 'Payment Method Name',
    'status': 'Status',
    'sort': 'Sort',
    'action': 'Action',
    'enable': 'Enable',
    'hide': 'Hide',
    'add': 'Add',
    'view payment analysis': 'View Payment Method Analysis',
  },
  'zh-CN': {
    overview: '总览',
    transactions: '交易',
    payouts: '提现',
    disputes: '争议',
    reports: '报表',
    settings: '设置',
    'return to shop': '返回店铺',
    pending: '待审核',
    'status text pending': '审核中',
    'title pending': '换约申请已提交',
    'desc pending': '请耐心等待审核，审核期间您仍可正常使用收款服务。如需了解审核进度，可随时查看详情。',
    returned: '已退回',
    'status text returned': '已退回',
    'title returned': '换约申请已退回',
    'desc returned': '您的申请材料需要修改，请根据审核意见进行调整后重新提交。',
    rejected: '已拒绝',
    'status text rejected': '已拒绝',
    'title rejected': '换约申请被拒绝',
    'desc rejected': '很抱歉，基于风险因素考虑，您的换约申请已被拒绝，若有其他问题可以随时联系您的客户经理。',
    approved: '已通过',
    'status text approved': '已通过',
    'title approved': '换约申请已通过',
    'desc approved': '恭喜！您的换约申请已通过审核，请在支付方式等其他配置完成后，在店铺-设置-收款页面点击「确认换约」按钮完成换约。',
    'company basic info': '企业基本资料',
    'company representative': '公司代表人',
    'company owners': '公司所有者',
    'business information': '经营信息',
    'bank account': '银行账户',
    'company type': '企业类型',
    'country/region': '企业注册所在国家/地区',
    'employer identification number': '雇主识别号（EIN）',
    'company registered name': '企业注册名称',
    'contact phone': '联系电话',
    'representative type': '代表人类型',
    'legal representative': '法定代表人',
    'document type': '证件类型',
    'passport': '护照',
    'document number': '证件号码',
    'issue date': '签发日期',
    'expiration date': '有效期至',
    'upload document': '上传证件照片',
    'beneficial owner': '受益人',
    'ownership percentage': '持股比例',
    'personal information': '个人信息',
    'date of birth': '出生日期',
    'nationality': '国籍',
    'country of residence': '居住国家',
    'address': '地址',
    'city': '城市',
    'state/province': '州/省',
    'zip code': '邮政编码',
    'business name': '业务名称',
    'business address': '业务地址',
    'business phone': '业务电话',
    'business email': '业务邮箱',
    'website': '网站',
    'estimated annual revenue': '预计年营业额',
    'number of employees': '员工人数',
    'business description': '业务描述',
    'withdrawal currency': '提款币种',
    'account name': '账户名称',
    'ACH routing number': 'ACH 路由号码',
    'bank account number': '银行账号',
    'upload bank proof': '上传银行证明',
    'submit materials': '提交资料',
    'confirm': '确认',
    'cancel': '取消',
    'edit': '编辑',
    'save': '保存',
    'agree terms': '我已阅读并同意服务条款',
    'agree privacy': '我已阅读并同意隐私政策',
    'view details': '查看详情',
    'resubmit': '重新提交',
    'confirm contract': '确认换约',
    'total': '总计',
    'available': '可提现',
    'frozen': '冻结',
    'deposit': '保证金',
    'orders': '订单',
    'refunds': '退款',
    'next payout': '下次提现',
    'payment method name': '付款方法名称',
    'status': '状态',
    'sort': '排序',
    'action': '操作',
    'enable': '启用',
    'hide': '隐藏',
    'add': '增加',
    'view payment analysis': '查看付款方式分析',
  },
  'zh-TW': {
    overview: '總覽',
    transactions: '交易',
    payouts: '提現',
    disputes: '爭議',
    reports: '報表',
    settings: '設定',
    'return to shop': '返回店鋪',
    pending: '待審核',
    'status text pending': '審核中',
    'title pending': '換約申請已提交',
    'desc pending': '請耐心等待審核，審核期間您仍可正常使用收款服務。如需了解審核進度，可隨時查看詳情。',
    returned: '已退回',
    'status text returned': '已退回',
    'title returned': '換約申請已退回',
    'desc returned': '您的申請材料需要修改，請根據審核意見進行調整後重新提交。',
    rejected: '已拒絕',
    'status text rejected': '已拒絕',
    'title rejected': '換約申請被拒絕',
    'desc rejected': '很抱歉，基於風險因素考慮，您的換約申請已被拒絕，若有其他問題可以隨時聯繫您的客戶經理。',
    approved: '已通過',
    'status text approved': '已通過',
    'title approved': '換約申請已通過',
    'desc approved': '恭喜！您的換約申請已通過審核，請在支付方式等其他配置完成後，在店鋪-設定-收款頁面點擊「確認換約」按鈕完成換約。',
    'company basic info': '企業基本資料',
    'company representative': '公司代表人',
    'company owners': '公司所有者',
    'business information': '經營資訊',
    'bank account': '銀行帳戶',
    'company type': '企業類型',
    'country/region': '企業註冊所在國家/地區',
    'employer identification number': '雇主識別號（EIN）',
    'company registered name': '企業註冊名稱',
    'contact phone': '聯繫電話',
    'representative type': '代表人類型',
    'legal representative': '法定代表人',
    'document type': '證件類型',
    'passport': '護照',
    'document number': '證件號碼',
    'issue date': '簽發日期',
    'expiration date': '有效期至',
    'upload document': '上傳證件照片',
    'beneficial owner': '受益人',
    'ownership percentage': '持股比例',
    'personal information': '個人資訊',
    'date of birth': '出生日期',
    'nationality': '國籍',
    'country of residence': '居住國家',
    'address': '地址',
    'city': '城市',
    'state/province': '州/省',
    'zip code': '郵政編碼',
    'business name': '業務名稱',
    'business address': '業務地址',
    'business phone': '業務電話',
    'business email': '業務信箱',
    'website': '網站',
    'estimated annual revenue': '預計年營業額',
    'number of employees': '員工人數',
    'business description': '業務描述',
    'withdrawal currency': '提款幣種',
    'account name': '帳戶名稱',
    'ACH routing number': 'ACH 路由號碼',
    'bank account number': '銀行帳號',
    'upload bank proof': '上傳銀行證明',
    'submit materials': '提交資料',
    'confirm': '確認',
    'cancel': '取消',
    'edit': '編輯',
    'save': '儲存',
    'agree terms': '我已閱讀並同意服務條款',
    'agree privacy': '我已閱讀並同意隱私政策',
    'view details': '查看詳情',
    'resubmit': '重新提交',
    'confirm contract': '確認換約',
    'total': '總計',
    'available': '可提現',
    'frozen': '凍結',
    'deposit': '保證金',
    'orders': '訂單',
    'refunds': '退款',
    'next payout': '下次提現',
    'payment method name': '付款方法名稱',
    'status': '狀態',
    'sort': '排序',
    'action': '操作',
    'enable': '啟用',
    'hide': '隱藏',
    'add': '增加',
    'view payment analysis': '查看付款方式分析',
  },
};

export default function ShoplinePayments() {
  const [activeNav, setActiveNav] = useState('overview');
  const [data, setData] = useState(mockData);
  const [dateRange, setDateRange] = useState({ start: '2026/06/03', end: '2026/06/03' });
  const [shopFilter, setShopFilter] = useState('所有店铺');
  const [timezone, setTimezone] = useState('UTC+8');
  const [showContractModal, setShowContractModal] = useState(false);
  const [agreeContract, setAgreeContract] = useState(false);
  const [showKycModal, setShowKycModal] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [showAuditBanner, setShowAuditBanner] = useState(false);
  const [auditStatus, setAuditStatus] = useState<'pending' | 'returned' | 'rejected' | 'approved'>('pending');
  const [language, setLanguage] = useState<'en' | 'zh-CN' | 'zh-TW'>('zh-CN');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const t = translations[language];

  const handleLanguageChange = (lang: 'en' | 'zh-CN' | 'zh-TW') => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  const handleBackToShop = () => {
    window.location.href = '/prototypes/untitled-2';
  };

  // 审核状态配置（使用翻译）
  const statusConfig = {
    pending: {
      label: t.pending,
      statusText: t['status text pending'],
      title: t['title pending'],
      desc: t['desc pending'],
      color: '#fff',
      bgGradient: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
      shadowColor: 'rgba(30, 58, 138, 0.3)',
      buttonColor: '#1e3a8a'
    },
    returned: {
      label: t.returned,
      statusText: t['status text returned'],
      title: t['title returned'],
      desc: t['desc returned'],
      color: '#fff',
      bgGradient: 'linear-gradient(90deg, #b45309 0%, #f59e0b 50%, #fbbf24 100%)',
      shadowColor: 'rgba(180, 83, 9, 0.3)',
      buttonColor: '#b45309'
    },
    rejected: {
      label: t.rejected,
      statusText: t['status text rejected'],
      title: t['title rejected'],
      desc: t['desc rejected'],
      color: '#fff',
      bgGradient: 'linear-gradient(90deg, #991b1b 0%, #ef4444 50%, #f87171 100%)',
      shadowColor: 'rgba(153, 27, 27, 0.3)',
      buttonColor: '#991b1b'
    },
    approved: {
      label: t.approved,
      statusText: t['status text approved'],
      title: t['title approved'],
      desc: t['desc approved'],
      color: '#fff',
      bgGradient: 'linear-gradient(90deg, #166534 0%, #22c55e 50%, #86efac 100%)',
      shadowColor: 'rgba(22, 101, 52, 0.3)',
      buttonColor: '#166534'
    }
  };

  // 退回原因配置（用于KYC弹窗各步骤顶部提示）
  const rejectionReasons = {
    step1: t['rejection step1'] || '企业基本资料审核未通过：请确认雇主识别号（EIN）格式是否正确，企业注册名称与营业执照一致。',
    step2: t['rejection step2'] || '公司代表人信息审核未通过：请提供清晰的证件照片，确保证件在有效期内。',
    step3: t['rejection step3'] || '公司所有者信息审核未通过：请补充所有持股25%以上股东的完整资料。',
    step4: t['rejection step4'] || '经营信息审核未通过：店铺预估营业额与实际经营情况不符，请重新填写。',
    step5: t['rejection step5'] || '银行账户信息审核未通过：请确认银行账户信息与企业名称一致。',
    step6: t['rejection step6'] || '资料总览审核未通过：请检查以上所有步骤的退回原因并修正。'
  };

  const handleStatusChange = (status: 'pending' | 'returned' | 'rejected' | 'approved') => {
    setAuditStatus(status);
  };

  // 模拟数据加载
  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        ...mockData,
        balance: {
          withdrawable: 12580.50,
          available: 12580.50,
          frozen: 0.00,
          pending: 3200.00,
          deposit: 5000.00,
        },
        transactions: {
          orders: { amount: 15800.00, count: 42 },
          refunds: { amount: -320.00, count: 3 },
          disputes: { amount: 0.00, count: 0 },
        },
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveNav(id);
  };

  const handleCloseKyc = () => {
    setShowExitConfirm(true);
  };

  const handleViewDetails = () => {
    setShowKycModal(true);
    setCurrentStep(1);
  };

  const handleExitConfirm = () => {
    setShowExitConfirm(false);
    setShowKycModal(false);
    setCurrentStep(1);
  };

  const handleExitCancel = () => {
    setShowExitConfirm(false);
  };

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      // 第6步点击确认并提交
      setShowKycModal(false);
      setCurrentStep(1);
      setAgreePrivacy(false);
      setShowAuditBanner(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const formatCurrency = (amount: number) => {
    return `TWD ${amount.toFixed(2)}`;
  };

  // 步骤配置（使用翻译）
  const steps = [
    { number: 1, label: t['company basic info'] },
    { number: 2, label: t['company representative'] },
    { number: 3, label: t['company owners'] },
    { number: 4, label: t['business information'] },
    { number: 5, label: t['bank account'] },
    { number: 6, label: t.overview },
  ];

  // 渲染步骤条
  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const renderSidebar = () => (
    <div className="kyc-sidebar">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`kyc-step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
          onClick={() => handleStepClick(step.number)}
        >
          <span className="step-number">{step.number}</span>
          <span className="step-label">{step.label}</span>
        </div>
      ))}
    </div>
  );

  // 渲染步骤1：基本资料
  const renderStep1 = () => (
    <div className="kyc-card">
      {auditStatus === 'returned' && (
        <div className="rejection-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12" y2="16"/>
          </svg>
          {rejectionReasons.step1}
        </div>
      )}
      <h3 className="kyc-title">{t['company basic info']}</h3>
      <div className="kyc-section">
        <label className="kyc-label">{t['company type']}</label>
        <div className="kyc-option">
          <span className="option-dot"></span>
          <span className="option-text">Company</span>
        </div>
        <p className="kyc-desc">Includes Single-Member LLC, Multi-Member LLC, S Corporation, C Corporation, etc.</p>
      </div>
      <div className="kyc-section">
        <label className="kyc-label">{t['country/region']}</label>
        <p className="kyc-value">United States</p>
      </div>
      <div className="kyc-section">
        <label className="kyc-label">{t['employer identification number']}</label>
        <p className="kyc-desc">If your business already has SHOPLINE Payments service, you can enter the <a href="#" className="kyc-link" onClick={(e) => e.preventDefault()}>authorization code</a> of the existing merchant to quickly activate the service for the new store.</p>
        <input type="text" className="kyc-input" defaultValue="123456789" />
      </div>
    </div>
  );

  // 渲染步骤2：公司代表人
  const renderStep2 = () => (
    <div className="kyc-card">
      {auditStatus === 'returned' && (
        <div className="rejection-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12" y2="16"/>
          </svg>
          {rejectionReasons.step2}
        </div>
      )}
      <h3 className="kyc-title">{t['company representative']}</h3>
      <p className="kyc-subtitle">Company representatives should be individuals with significant influence or decision-making power over the company's operations, such as directors, CEOs, authorized signatories, presidents, general managers recorded in the company registration documents, etc.</p>
      
      <div className="kyc-section">
        <label className="kyc-label">Title</label>
        <div className="kyc-select-wrapper">
          <select className="kyc-select" defaultValue="CFO">
            <option>CEO</option>
            <option>CFO</option>
            <option>President</option>
            <option>General Manager</option>
            <option>Director</option>
            <option>Authorized Signatory</option>
          </select>
          <span className="kyc-select-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="kyc-section">
        <label className="kyc-label">Nationality/Region</label>
        <div className="kyc-select-wrapper">
          <select className="kyc-select" defaultValue="Afghanistan">
            <option>Afghanistan</option>
            <option>China</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Japan</option>
            <option>South Korea</option>
          </select>
          <span className="kyc-select-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="kyc-section">
        <label className="kyc-label">{t['document type']}</label>
        <div className="kyc-radio-group">
          <label className="kyc-radio">
            <input type="radio" name="idType" value="passport" />
            <span className="kyc-radio-dot"></span>
            <span className="kyc-radio-label">{t.passport}</span>
          </label>
          <label className="kyc-radio">
            <input type="radio" name="idType" value="idcard" />
            <span className="kyc-radio-dot"></span>
            <span className="kyc-radio-label">ID Card</span>
          </label>
        </div>
      </div>

      <div className="kyc-section">
        <label className="kyc-label">First Name</label>
        <input type="text" className="kyc-input" placeholder="" />
      </div>

      <div className="kyc-section">
        <label className="kyc-label">Last Name</label>
        <input type="text" className="kyc-input" placeholder="" />
      </div>

      <div className="kyc-section">
        <label className="kyc-label">{t['document number']}</label>
        <input type="text" className="kyc-input" placeholder={language === 'zh-CN' ? '请输入' : language === 'zh-TW' ? '請輸入' : 'Please enter'} />
      </div>
    </div>
  );

  // 渲染步骤3：公司所有者
  const renderStep3 = () => (
    <div className="kyc-card">
      {auditStatus === 'returned' && (
        <div className="rejection-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12" y2="16"/>
          </svg>
          {rejectionReasons.step3}
        </div>
      )}
      <h3 className="kyc-title">{t['company owners']}</h3>
      <p className="kyc-subtitle">Please provide information for all shareholders who own 25% or more of the company. If the shareholder is a publicly traded company, you can provide corporate information.</p>

      <div className="owner-list">
        <div className="owner-item">
          <div className="owner-info">
            <span className="owner-name">12313213 123123</span>
            <span className="owner-tag">Company Representative</span>
          </div>
          <div className="owner-id">ID: ****1233</div>
          <button className="owner-delete">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>

      <button className="owner-add-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        {language === 'zh-CN' ? '添加其他公司所有者' : language === 'zh-TW' ? '添加其他公司所有者' : 'Add Other Company Owners'}
      </button>
    </div>
  );

  // 渲染步骤4：经营信息
  const renderStep4 = () => (
    <div className="kyc-card">
      {auditStatus === 'returned' && (
        <div className="rejection-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12" y2="16"/>
          </svg>
          {rejectionReasons.step4}
        </div>
      )}
      <h3 className="kyc-title">{t['business information']}</h3>
      <p className="kyc-subtitle">To better serve you, we need to understand your store (jeff-blacksmith7) information. Please fill in according to your actual situation.</p>

      <div className="kyc-section">
        <label className="kyc-label">{t['estimated annual revenue']}</label>
        <div className="kyc-select-wrapper">
          <select className="kyc-select" defaultValue="">
            <option value="" disabled>{language === 'zh-CN' ? '请选择' : language === 'zh-TW' ? '請選擇' : 'Please select'}</option>
            <option value="1">TWD 0 - 10,000</option>
            <option value="2">TWD 10,000 - 50,000</option>
            <option value="3">TWD 50,000 - 100,000</option>
            <option value="4">TWD 100,000 - 500,000</option>
            <option value="5">TWD 500,000+</option>
          </select>
          <span className="kyc-select-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="kyc-section">
        <label className="kyc-label">Average Order Value</label>
        <div className="kyc-input-prefix">
          <span className="input-prefix">TWD</span>
          <input type="text" className="kyc-input with-prefix" placeholder={language === 'zh-CN' ? '请输入' : language === 'zh-TW' ? '請輸入' : 'Please enter'} />
        </div>
      </div>
    </div>
  );

  const renderStep4Extra = () => (
    <div className="kyc-card">
      <h3 className="kyc-title">{language === 'zh-CN' ? '添加您经营的商店信息' : language === 'zh-TW' ? '添加您經營的商店資訊' : 'Add Your Store Information'}</h3>
      <button className="owner-add-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        {language === 'zh-CN' ? '在线商店' : language === 'zh-TW' ? '在線商店' : 'Online Store'}
      </button>
    </div>
  );

  // 渲染步骤5：银行账户信息
  const renderStep5 = () => (
    <div className="kyc-card">
      {auditStatus === 'returned' && (
        <div className="rejection-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12" y2="16"/>
          </svg>
          {rejectionReasons.step5}
        </div>
      )}
      <h3 className="kyc-title">{t['bank account']}</h3>

      <button className="bank-add-header">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        {language === 'zh-CN' ? '添加银行账户' : language === 'zh-TW' ? '添加銀行帳戶' : 'Add Bank Account'}
      </button>

      <div className="kyc-section">
        <label className="kyc-label">Account Type</label>
        <div className="kyc-radio-group">
          <label className="kyc-radio">
            <input type="radio" name="accountType" value="company" defaultChecked />
            <span className="kyc-radio-dot"></span>
            <span className="kyc-radio-label">{language === 'zh-CN' ? '公司账号' : language === 'zh-TW' ? '公司帳號' : 'Company Account'}</span>
          </label>
        </div>
      </div>

      <div className="kyc-section">
        <label className="kyc-label">{t['withdrawal currency']}</label>
        <div className="kyc-select-wrapper">
          <select className="kyc-select" defaultValue="TWD">
            <option value="TWD">TWD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
          </select>
          <span className="kyc-select-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="kyc-section">
        <label className="kyc-label">{t['account name']}</label>
        <input type="text" className="kyc-input" defaultValue="12321323" />
        <p className="kyc-hint">{language === 'zh-CN' ? '仅支持提现到企业同名账户' : language === 'zh-TW' ? '僅支援提現到企業同名帳戶' : 'Only supports withdrawals to accounts with the same name as the business'}</p>
      </div>

      <div className="kyc-section">
        <label className="kyc-label">{t['ACH routing number']}</label>
        <input type="text" className="kyc-input" defaultValue="123456789" />
      </div>

      <div className="kyc-section">
        <label className="kyc-label">{t['bank account number']}</label>
        <input type="text" className="kyc-input" defaultValue="000123456789" />
      </div>

      <div className="kyc-section">
        <label className="kyc-label">{t['upload bank proof']}</label>
        <p className="kyc-desc">{language === 'zh-CN' ? '过去6个月内发出的银行对帐单，应包括帐户持有人姓名、帐单日期、帐户号码、银行名称、银行标志。' : language === 'zh-TW' ? '過去6個月內發出的銀行對帳單，應包括帳戶持有人姓名、帳單日期、帳戶號碼、銀行名稱、銀行標誌。' : 'Bank statements issued within the past 6 months should include account holder name, statement date, account number, bank name, and bank logo.'}<a href="#" className="kyc-link" onClick={(e) => e.preventDefault()}>{language === 'zh-CN' ? '查看示例' : language === 'zh-TW' ? '查看範例' : 'View Example'}</a></p>
        <div className="upload-area">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>{language === 'zh-CN' ? '上传文件' : language === 'zh-TW' ? '上傳檔案' : 'Upload File'}</span>
        </div>
        <p className="kyc-hint">{language === 'zh-CN' ? '10MB以内，JPG/PNG/JPEG/PDF格式' : language === 'zh-TW' ? '10MB以內，JPG/PNG/JPEG/PDF格式' : 'Within 10MB, JPG/PNG/JPEG/PDF format'}</p>
      </div>

      <div className="bank-form-actions">
        <button className="bank-cancel">{t.cancel}</button>
        <button className="bank-save">{t.save}</button>
      </div>
    </div>
  );

  // 渲染步骤6：总览
  const renderStep6 = () => (
    <div className="kyc-card">
      {auditStatus === 'returned' && (
        <div className="rejection-alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12" y2="16"/>
          </svg>
          {rejectionReasons.step6}
        </div>
      )}
      <h3 className="kyc-title">{t.overview}</h3>
      <p className="kyc-subtitle">{language === 'zh-CN' ? '以下内容为本次提交资料的概览，请您再次确认资料的真实性、准确性和完整性，确认无误后点击「提交资料」，我们会尽快为您完成审核。' : language === 'zh-TW' ? '以下內容為本次提交資料的概覽，請您再次確認資料的真實性、準確性和完整性，確認無誤後點擊「提交資料」，我們會儘快為您完成審核。' : 'Below is an overview of the information submitted. Please confirm the authenticity, accuracy, and completeness of the information. After confirming, click "Submit Materials" and we will complete the review as soon as possible.'}</p>

      <div className="review-section">
        <div className="review-header">
          <h4>{t['company basic info']}</h4>
          <button className="review-edit">
            <Icons.edit />
            {t.edit}
          </button>
        </div>
        <div className="review-content">
          <div className="review-item">
            <span className="review-label">{t['company type']}</span>
            <span className="review-value">Company</span>
          </div>
          <div className="review-item">
            <span className="review-label">{t['country/region']}</span>
            <span className="review-value">United States</span>
          </div>
          <div className="review-item">
            <span className="review-label">{t['employer identification number']}</span>
            <span className="review-value">123332233</span>
          </div>
          <div className="review-item">
            <span className="review-label">{t['company registered name']}</span>
            <span className="review-value">12321323</span>
          </div>
          <div className="review-item">
            <span className="review-label">{t['contact phone']}</span>
            <span className="review-value">+1 2345432332</span>
          </div>
          <div className="review-item">
            <span className="review-label">电子邮箱地址</span>
            <span className="review-value">wei.han@shopline.com</span>
          </div>
          <div className="review-item">
            <span className="review-label">企业注册地址</span>
            <span className="review-value">美国 123213 123123 Armed Forces Europe 12323</span>
          </div>
          <div className="review-item">
            <span className="review-label">企业运营地址</span>
            <span className="review-value">美国 123213 123123 Armed Forces Europe 12323</span>
          </div>
        </div>
      </div>

      <div className="review-section">
        <div className="review-header">
          <h4>公司代表人</h4>
          <button className="review-edit">
            <Icons.edit />
            编辑
          </button>
        </div>
        <div className="review-content">
          <div className="review-item">
            <span className="review-label">名字</span>
            <span className="review-value">123123</span>
          </div>
          <div className="review-item">
            <span className="review-label">姓氏</span>
            <span className="review-value">123123</span>
          </div>
          <div className="review-item">
            <span className="review-label">职位名称</span>
            <span className="review-value">Chief Executive Officer</span>
          </div>
          <div className="review-item">
            <span className="review-label">国籍/地区</span>
            <span className="review-value">阿尔巴尼亚</span>
          </div>
          <div className="review-item">
            <span className="review-label">出生日期</span>
            <span className="review-value">1993-10-12</span>
          </div>
          <div className="review-item">
            <span className="review-label">现居地址</span>
            <span className="review-value">美国 234342 3444 Armed Forces Europe 23433</span>
          </div>
        </div>
      </div>

      <div className="review-section">
        <div className="review-header">
          <h4>公司所有者</h4>
          <button className="review-edit">
            <Icons.edit />
            编辑
          </button>
        </div>
        <div className="review-content">
          <div className="owner-item review-owner-item">
            <div className="owner-info">
              <span className="owner-name">12313213 123123</span>
              <span className="owner-tag">公司代表</span>
            </div>
            <div className="owner-id">身份证: ****1233</div>
          </div>
        </div>
      </div>

      <div className="review-section">
        <div className="review-header">
          <h4>经营信息</h4>
          <button className="review-edit">
            <Icons.edit />
            编辑
          </button>
        </div>
        <div className="review-content">
          <div className="review-item">
            <span className="review-label">店铺每月预估营业额</span>
            <span className="review-value">&lt; TWD 10,000</span>
          </div>
          <div className="review-item">
            <span className="review-label">单笔平均订单金额</span>
            <span className="review-value">1233233</span>
          </div>
          <div className="review-item">
            <span className="review-label">经营的商店</span>
            <div className="review-shop-item">
              <span className="review-shop-name">sadds</span>
              <span className="review-shop-tag">在线商店</span>
              <div className="review-shop-payment">
                <span className="payment-badge">G Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-section">
        <div className="review-header">
          <h4>银行账户</h4>
          <button className="review-edit">
            <Icons.edit />
            编辑
          </button>
        </div>
        <div className="review-content">
          <div className="bank-item review-bank-item">
            <div className="bank-info">
              <span className="bank-name">1232132123</span>
              <span className="bank-tag">默认账户</span>
            </div>
            <div className="bank-currency">提现币种: TWD</div>
          </div>
        </div>
      </div>
    </div>
  );

  // 根据当前步骤渲染内容
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return (
          <>
            {renderStep4()}
            {renderStep4Extra()}
          </>
        );
      case 5:
        return renderStep5();
      case 6:
        return renderStep6();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="shopline-payments">
      {/* 侧边栏 */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">S</span>
            <span className="logo-text">SHOPLINE Payments</span>
          </div>
        </div>
        
        <div className="shop-selector">
          <Icons.shop />
          <span className="shop-id">{data.shopId}</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons];
            return (
              <button
                key={item.id}
                className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <IconComponent />
                <span>{t[item.labelKey]}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* 主内容区 */}
      <main className="main-content">
        {/* 顶部栏 */}
        <header className="top-bar">
          <h1 className="page-title">{t.overview}</h1>
          <div className="top-bar-actions">
            <button className="icon-btn"><Icons.settings /></button>
            <button className="icon-btn"><Icons.help /></button>
            
            {/* 语言切换 */}
            <div className="language-dropdown">
              <button 
                className="language-btn" 
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                {language === 'en' ? 'English' : language === 'zh-CN' ? '简体中文' : '繁體中文'}
                <Icons.arrowDown />
              </button>
              {showLanguageDropdown && (
                <div className="language-menu">
                  <button 
                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </button>
                  <button 
                    className={`language-option ${language === 'zh-CN' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('zh-CN')}
                  >
                    简体中文
                  </button>
                  <button 
                    className={`language-option ${language === 'zh-TW' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('zh-TW')}
                  >
                    繁體中文
                  </button>
                </div>
              )}
            </div>
            
            <button className="back-btn" onClick={handleBackToShop}>
              <Icons.external />
              {t['return to shop']}
            </button>
          </div>
        </header>

        {/* 审核中 Banner */}
        {showAuditBanner && (
          <div className="audit-banner" style={{ background: statusConfig[auditStatus].bgGradient, boxShadow: `0 8px 32px ${statusConfig[auditStatus].shadowColor}` }}>
            <div className="audit-banner-bg"></div>
            <div className="audit-banner-inner">
              <div className="audit-banner-icon-container">
                <div className="audit-banner-icon" style={{ background: `${statusConfig[auditStatus].color}20` }}>
                  {auditStatus === 'approved' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : auditStatus === 'rejected' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  ) : auditStatus === 'returned' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 4 1 10 7 10"/>
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  )}
                </div>
                <div className="audit-banner-pulse" style={{ background: `${statusConfig[auditStatus].color}30` }}></div>
              </div>
              <div className="audit-banner-content">
                <div className="audit-banner-header">
                  <span className="audit-banner-status" style={{ background: `${statusConfig[auditStatus].color}25`, color: statusConfig[auditStatus].color }}>{statusConfig[auditStatus].statusText}</span>
                  <h3 className="audit-banner-title">{statusConfig[auditStatus].title}</h3>
                </div>
                <p className="audit-banner-desc">{statusConfig[auditStatus].desc}</p>
              </div>
              <button className="audit-banner-action" onClick={() => handleViewDetails()} style={{ color: auditStatus === 'returned' ? '#fa8c16' : auditStatus === 'rejected' ? '#f5222d' : auditStatus === 'approved' ? '#52c41a' : '#667eea' }}>
                <span>{auditStatus === 'returned' ? t.resubmit : t['view details']}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* 状态按钮 */}
        {showAuditBanner && (
          <div className="status-buttons">
            <button 
              className={`status-btn ${auditStatus === 'pending' ? 'active' : ''}`}
              onClick={() => handleStatusChange('pending')}
              style={{ 
                '--status-color': statusConfig.pending.buttonColor,
                backgroundColor: auditStatus === 'pending' ? statusConfig.pending.buttonColor : '#fff',
                borderColor: auditStatus === 'pending' ? statusConfig.pending.buttonColor : '#d9d9d9',
                color: auditStatus === 'pending' ? '#fff' : '#666'
              }}
            >{t.pending}</button>
            <button 
              className={`status-btn ${auditStatus === 'returned' ? 'active' : ''}`}
              onClick={() => handleStatusChange('returned')}
              style={{ 
                '--status-color': statusConfig.returned.buttonColor,
                backgroundColor: auditStatus === 'returned' ? statusConfig.returned.buttonColor : '#fff',
                borderColor: auditStatus === 'returned' ? statusConfig.returned.buttonColor : '#d9d9d9',
                color: auditStatus === 'returned' ? '#fff' : '#666'
              }}
            >{t.returned}</button>
            <button 
              className={`status-btn ${auditStatus === 'rejected' ? 'active' : ''}`}
              onClick={() => handleStatusChange('rejected')}
              style={{ 
                '--status-color': statusConfig.rejected.buttonColor,
                backgroundColor: auditStatus === 'rejected' ? statusConfig.rejected.buttonColor : '#fff',
                borderColor: auditStatus === 'rejected' ? statusConfig.rejected.buttonColor : '#d9d9d9',
                color: auditStatus === 'rejected' ? '#fff' : '#666'
              }}
            >{t.rejected}</button>
            <button 
              className={`status-btn ${auditStatus === 'approved' ? 'active' : ''}`}
              onClick={() => handleStatusChange('approved')}
              style={{ 
                '--status-color': statusConfig.approved.buttonColor,
                backgroundColor: auditStatus === 'approved' ? statusConfig.approved.buttonColor : '#fff',
                borderColor: auditStatus === 'approved' ? statusConfig.approved.buttonColor : '#d9d9d9',
                color: auditStatus === 'approved' ? '#fff' : '#666'
              }}
            >{t.approved}</button>
          </div>
        )}

        {/* 内容区 */}
        <div className="content-area">
          <div className="content-layout">
            {/* 左侧列：账户余额 + 交易概览 */}
            <div className="content-left">
              {/* 账户余额卡片 */}
              <div className="card balance-card">
                <div className="card-header">
                  <h2>{language === 'zh-CN' ? '账户余额' : language === 'zh-TW' ? '帳戶餘額' : 'Account Balance'}</h2>
                  <button className="link-btn">{t['view details']}</button>
                </div>
                <div className="balance-notice">
                  <p>{language === 'zh-CN' ? '即将入账: 目前没有可提出的款项' : language === 'zh-TW' ? '即將入帳: 目前沒有可提出的款項' : 'Pending: No withdrawable funds'}</p>
                  <p>{language === 'zh-CN' ? '待处理款项' : language === 'zh-TW' ? '待處理款項' : 'Pending'}: {formatCurrency(0)}</p>
                </div>
                <div className="balance-container">
                  <div className="balance-main">
                    <div className="balance-main-label">{language === 'zh-CN' ? '可提现账户余额' : language === 'zh-TW' ? '可提現帳戶餘額' : 'Withdrawable Balance'}</div>
                    <div className="balance-main-amount">{formatCurrency(data.balance.withdrawable)}</div>
                  </div>
                  <div className="balance-inner-grid">
                    <div className="balance-sub-item">
                      <div className="balance-item-label">{language === 'zh-CN' ? '可用余额' : language === 'zh-TW' ? '可用餘額' : 'Available'}</div>
                      <div className="balance-item-amount">{formatCurrency(data.balance.available)}</div>
                      <button className="withdraw-btn">{language === 'zh-CN' ? '提现' : language === 'zh-TW' ? '提現' : 'Withdraw'}</button>
                    </div>
                    <div className="balance-sub-item">
                      <div className="balance-item-label">{language === 'zh-CN' ? '冻结余额' : language === 'zh-TW' ? '凍結餘額' : 'Frozen'}</div>
                      <div className="balance-item-amount">{formatCurrency(data.balance.frozen)}</div>
                    </div>
                  </div>
                </div>
                <div className="balance-extra-grid">
                  <div className="balance-extra-item">
                    <div className="balance-item-label">{language === 'zh-CN' ? '待结算余额' : language === 'zh-TW' ? '待結算餘額' : 'Pending'}</div>
                    <div className="balance-item-amount">{formatCurrency(data.balance.pending)}</div>
                  </div>
                  <div className="balance-extra-item">
                    <div className="balance-item-label">{language === 'zh-CN' ? '保证金余额' : language === 'zh-TW' ? '保證金餘額' : 'Deposit'}</div>
                    <div className="balance-item-amount">{formatCurrency(data.balance.deposit)}</div>
                  </div>
                </div>
                <div className="balance-footer">
                  {language === 'zh-CN' ? '注意：已冻结余额和保证金不能用于发起主动退款或拒付退款，请合理安排您的资金，避免无法退款的情况。' : language === 'zh-TW' ? '注意：已凍結餘額和保證金不能用於發起主動退款或拒付退款，請合理安排您的資金，避免無法退款的情況。' : 'Note: Frozen balance and deposit cannot be used for active refunds or chargeback refunds. Please manage your funds appropriately to avoid situations where refunds cannot be processed.'}
                </div>
              </div>

              {/* 交易概览卡片 */}
              <div className="card transaction-card">
                <div className="card-header">
                  <h2>{language === 'zh-CN' ? '交易概览' : language === 'zh-TW' ? '交易概覽' : 'Transaction Overview'}</h2>
                  <div className="filter-group">
                    <button className="filter-btn">{language === 'zh-CN' ? '所有店铺' : language === 'zh-TW' ? '所有店鋪' : 'All Stores'} <Icons.arrowDown /></button>
                    <button className="filter-btn">UTC+8 <Icons.arrowDown /></button>
                    <button className="filter-btn">{dateRange.start} - {dateRange.end} <Icons.arrowDown /></button>
                  </div>
                </div>
                <div className="transaction-grid">
                  <div className="transaction-item">
                    <div className="transaction-label">{language === 'zh-CN' ? '订单交易' : language === 'zh-TW' ? '訂單交易' : 'Orders'}</div>
                    <div className="transaction-amount">{formatCurrency(data.transactions.orders.amount)}</div>
                    <div className="transaction-count">{language === 'zh-CN' ? '共' : language === 'zh-TW' ? '共' : 'Total'} {data.transactions.orders.count} {language === 'zh-CN' ? '笔' : language === 'zh-TW' ? '筆' : 'transactions'}</div>
                  </div>
                  <div className="transaction-item">
                    <div className="transaction-label">{language === 'zh-CN' ? '退款交易' : language === 'zh-TW' ? '退款交易' : 'Refunds'}</div>
                    <div className="transaction-amount">{formatCurrency(data.transactions.refunds.amount)}</div>
                    <div className="transaction-count">{language === 'zh-CN' ? '共' : language === 'zh-TW' ? '共' : 'Total'} {data.transactions.refunds.count} {language === 'zh-CN' ? '笔' : language === 'zh-TW' ? '筆' : 'transactions'}</div>
                  </div>
                  <div className="transaction-item">
                    <div className="transaction-label">{language === 'zh-CN' ? '争议交易退款' : language === 'zh-TW' ? '爭議交易退款' : 'Disputes'}</div>
                    <div className="transaction-amount">{formatCurrency(data.transactions.disputes.amount)}</div>
                    <div className="transaction-count">{language === 'zh-CN' ? '共' : language === 'zh-TW' ? '共' : 'Total'} {data.transactions.disputes.count} {language === 'zh-CN' ? '笔' : language === 'zh-TW' ? '筆' : 'transactions'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧列：账户信息 */}
            <div className="content-right">
              <div className="card info-card">
                <div className="card-header">
                  <h2>{language === 'zh-CN' ? '账户信息' : language === 'zh-TW' ? '帳戶資訊' : 'Account Information'}</h2>
                  <button className="outline-btn" onClick={() => setShowContractModal(true)}>{language === 'zh-CN' ? '换约' : language === 'zh-TW' ? '換約' : 'Contract Renewal'}</button>
                </div>
                <div className="info-list">
                  <div className="info-item">
                    <div className="info-label">{language === 'zh-CN' ? '账户名称' : language === 'zh-TW' ? '帳戶名稱' : 'Account Name'}</div>
                    <div className="info-value">
                      234344
                      <button className="copy-btn"><Icons.external /></button>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">SHOPLINE Payments {language === 'zh-CN' ? '账户号码' : language === 'zh-TW' ? '帳戶號碼' : 'Account Number'}</div>
                    <div className="info-value">
                      7549035622670055903
                      <button className="copy-btn"><Icons.external /></button>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">{language === 'zh-CN' ? '账户验证状态' : language === 'zh-TW' ? '帳戶驗證狀態' : 'Account Verification Status'}</div>
                    <div className="verification-list">
                      <div className="verification-item">
                        <span className="check-icon">✓</span>
                        <span>{language === 'zh-CN' ? '基本资料设置' : language === 'zh-TW' ? '基本資料設置' : 'Basic Information'} {language === 'zh-CN' ? '已完成' : language === 'zh-TW' ? '已完成' : 'Completed'}</span>
                      </div>
                      <div className="verification-item">
                        <span className="check-icon">✓</span>
                        <span>{language === 'zh-CN' ? '审核验证' : language === 'zh-TW' ? '審核驗證' : 'Review Verification'} {language === 'zh-CN' ? '已完成' : language === 'zh-TW' ? '已完成' : 'Completed'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 换约弹窗 */}
      {showContractModal ? (
        <div className="modal-overlay" onClick={() => setShowContractModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>SHOPLINE Payments {language === 'zh-CN' ? '换约确认' : language === 'zh-TW' ? '換約確認' : 'Contract Renewal Confirmation'}</h2>
              <button className="modal-close" onClick={() => setShowContractModal(false)}>
                <Icons.close />
              </button>
            </div>
            <div className="modal-body">
              <div className="contract-content">
                <div className="renewal-notice">
                  <h4>{language === 'zh-CN' ? '换约说明' : language === 'zh-TW' ? '換約說明' : 'Renewal Instructions'}</h4>
                  <div className="renewal-items">
                    <div className="renewal-item">
                      <span className="renewal-num">1</span>
                      <p>{language === 'zh-CN' ? '换约即表示您主动放弃当前主体申请的 SHOPLINE Payments 商户号，系统将使用新的主体信息重新发起申请流程。' : language === 'zh-TW' ? '換約即表示您主動放棄當前主體申請的 SHOPLINE Payments 商戶號，系統將使用新的主體資訊重新發起申請流程。' : 'Contract renewal means you voluntarily give up the SHOPLINE Payments merchant ID applied for under the current entity, and the system will re-initiate the application process using the new entity information.'}</p>
                    </div>
                    <div className="renewal-item">
                      <span className="renewal-num">2</span>
                      <p>{language === 'zh-CN' ? '换约完成后，新商户号将与您的店铺进行换绑操作，原商户号的所有交易记录、资金流水、结算数据等均不可查看、不可操作。' : language === 'zh-TW' ? '換約完成後，新商戶號將與您的店鋪進行換綁操作，原商戶號的所有交易記錄、資金流水、結算數據等均不可查看、不可操作。' : 'After completing the renewal, the new merchant ID will be rebinded to your store. All transaction records, fund flows, settlement data, etc. of the original merchant ID will be inaccessible.'}</p>
                    </div>
                    <div className="renewal-item">
                      <span className="renewal-num">3</span>
                      <p>{language === 'zh-CN' ? '换约一旦完成，系统将无法撤销该操作，原商户号对应的账户余额、待结算金额等需提前处理完毕。' : language === 'zh-TW' ? '換約一旦完成，系統將無法撤銷該操作，原商戶號對應的帳戶餘額、待結算金額等需提前處理完畢。' : 'Once the renewal is completed, the system cannot undo this operation. The account balance and pending settlement amount corresponding to the original merchant ID must be processed in advance.'}</p>
                    </div>
                    <div className="renewal-item">
                      <span className="renewal-num">4</span>
                      <p>{language === 'zh-CN' ? '换约过程中，店铺支付功能可能会受到短暂影响，建议您选择交易低峰期进行操作，并提前告知相关财务人员。' : language === 'zh-TW' ? '換約過程中，店鋪支付功能可能會受到短暫影響，建議您選擇交易低峰期進行操作，並提前告知相關財務人員。' : 'During the renewal process, the store payment function may be temporarily affected. It is recommended that you choose a low-traffic period to perform the operation.'}</p>
                    </div>
                    <div className="renewal-item">
                      <span className="renewal-num">5</span>
                      <p>{language === 'zh-CN' ? '换约成功后，新主体需要重新完成资质审核、银行账户绑定等全部入驻流程，审核通过后方可正常使用收款服务。' : language === 'zh-TW' ? '換約成功後，新主體需要重新完成資質審核、銀行帳戶綁定等全部入駐流程，審核通過後方可正常使用收款服務。' : 'After successful renewal, the new entity needs to complete all onboarding processes including qualification review and bank account binding again.'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <label className="agreement-label">
                <input
                  type="checkbox"
                  checked={agreeContract}
                  onChange={(e) => setAgreeContract(e.target.checked)}
                />
                <span>{language === 'zh-CN' ? '我已仔细阅读并同意' : language === 'zh-TW' ? '我已仔細閱讀並同意' : 'I have carefully read and agree to'}<a href="#" className="agreement-link-inline" onClick={(e) => e.preventDefault()}>《SHOPLINE Payments {language === 'zh-CN' ? '换约服务协议' : language === 'zh-TW' ? '換約服務協議' : 'Renewal Service Agreement'}》</a></span>
              </label>
            </div>
            <div className="modal-footer">
              <button className="modal-cancel" onClick={() => setShowContractModal(false)}>{t.cancel}</button>
              <button
                className={`modal-next ${!agreeContract ? 'disabled' : ''}`}
                onClick={() => {
                  if (agreeContract) {
                    setShowContractModal(false);
                    setShowKycModal(true);
                    setCurrentStep(1);
                  }
                }}
              >{language === 'zh-CN' ? '下一步' : language === 'zh-TW' ? '下一步' : 'Next Step'}</button>
            </div>
          </div>
        </div>
      ) : null}

      {/* KYC 全屏弹层 */}
      {showKycModal ? (
        <div className="kyc-overlay">
          <button className="kyc-close-btn" onClick={handleCloseKyc}>
            <Icons.close />
          </button>
          <div className="kyc-container">
            {renderSidebar()}
            <div className="kyc-content">
              <div className="kyc-scroll-area">
                {renderStepContent()}
              </div>
              <div className="kyc-actions">
                <div className="kyc-actions-left">
                  {currentStep > 1 && (
                    <button className="kyc-prev" onClick={handlePrevStep}>{language === 'zh-CN' ? '上一步' : language === 'zh-TW' ? '上一步' : 'Previous Step'}</button>
                  )}
                </div>
                <div className="kyc-actions-right">
                  {currentStep === 6 && (
                    <label className="privacy-label">
                      <input
                        type="checkbox"
                        checked={agreePrivacy}
                        onChange={(e) => setAgreePrivacy(e.target.checked)}
                      />
                      <span>{language === 'zh-CN' ? '我同意隐私权条款与服务细则' : language === 'zh-TW' ? '我同意隱私權條款與服務細則' : 'I agree to the Privacy Policy and Service Terms'}</span>
                    </label>
                  )}
                  <button
                    className={`kyc-submit ${currentStep === 6 && !agreePrivacy ? 'disabled' : ''}`}
                    onClick={handleNextStep}
                    disabled={currentStep === 6 && !agreePrivacy}
                  >
                    {currentStep === 6 ? (language === 'zh-CN' ? '确认并提交' : language === 'zh-TW' ? '確認並提交' : 'Confirm and Submit') : (language === 'zh-CN' ? '保存并继续' : language === 'zh-TW' ? '儲存並繼續' : 'Save and Continue')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* 退出确认弹窗 */}
      {showExitConfirm && (
        <div className="exit-confirm-overlay" onClick={handleExitCancel}>
          <div className="exit-confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="exit-confirm-header">
              <h3>{language === 'zh-CN' ? '确认退出' : language === 'zh-TW' ? '確認退出' : 'Confirm Exit'}</h3>
              <button className="exit-confirm-close" onClick={handleExitCancel}>
                <Icons.close />
              </button>
            </div>
            <div className="exit-confirm-body">
              <div className="exit-confirm-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#faad14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <p className="exit-confirm-title">{language === 'zh-CN' ? '退出后未保存的内容将被清空' : language === 'zh-TW' ? '退出後未儲存的內容將被清空' : 'Unsaved content will be cleared after exiting'}</p>
              <p className="exit-confirm-desc">{language === 'zh-CN' ? '确定要退出吗？' : language === 'zh-TW' ? '確定要退出嗎？' : 'Are you sure you want to exit?'}</p>
            </div>
            <div className="exit-confirm-footer">
              <button className="exit-confirm-cancel" onClick={handleExitCancel}>{t.cancel}</button>
              <button className="exit-confirm-ok" onClick={handleExitConfirm}>{language === 'zh-CN' ? '确认退出' : language === 'zh-TW' ? '確認退出' : 'Confirm Exit'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
