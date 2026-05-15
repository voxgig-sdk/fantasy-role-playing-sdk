package core

type FantasyRolePlayingError struct {
	IsFantasyRolePlayingError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFantasyRolePlayingError(code string, msg string, ctx *Context) *FantasyRolePlayingError {
	return &FantasyRolePlayingError{
		IsFantasyRolePlayingError: true,
		Sdk:              "FantasyRolePlaying",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FantasyRolePlayingError) Error() string {
	return e.Msg
}
