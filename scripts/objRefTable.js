const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Cnds.PickByUID,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerGet,
		C3.Plugins.Text.Cnds.CompareText,
		C3.Plugins.Text.Acts.SetFontColor
	];
};
self.C3_JsPropNameTable = [
	{Текст: 0},
	{istockphoto1171867907612x: 0},
	{GamePush: 0},
	{GamePushChannels: 0}
];

self.InstanceType = {
	Текст: class extends self.ITextInstance {},
	istockphoto1171867907612x: class extends self.ISpriteInstance {},
	GamePush: class extends self.C3.Plugins.Eponesh_GameScore.Instance {},
	GamePushChannels: class extends self.C3.Plugins.GamePush_Channels.Instance {}
}