import type { UserConfig } from '@commitlint/types';

const CommitlintConfig: UserConfig = {
	extends: ['git-commit-emoji', 'cz'],
	// 校验规则
	// rules: {
	// 	'type-enum': [
	// 		2,
	// 		'always',
	// 		[
	// 			'init' /* 初始化 */,
	// 			'feat' /* 添加新特性 */,
	// 			'fix' /* 修改Bug */,
	// 			'perf' /* 优化相关，比如提升性能，体验等  */,
	// 			'style' /* 格式（非正常业务逻辑变动） */,
	// 			'docs' /* 文档修改 */,
	// 			'merge' /* 合并分支 */,
	// 			'update' /* 更新 */,
	// 			'refactor' /* 重构（即不是新增功能，也不是修改bug的代码变动） */,
	// 			'test' /* 增加测试 */,
	// 			'chore' /* 构建过程或辅助工具的变动 */,
	// 			'revert' /* 代码版本回滚 */,
	// 			'workflow' /* 添加工作流 */,
	// 		],
	// 	],
	// },
};

export default CommitlintConfig;
