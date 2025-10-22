export interface MatchupStats {
    gameStatusText: string;

    homeScore: number;
    homeInBonus: boolean;
    homeTimeoutsRemaining: number;
    homeTeamAssists: number;
    homeTeamRebounds: number;
    homeTeamOffensiveRebounds: number;
    homeTeamDefensiveRebounds: number;
    homeTeamTurnovers: number;

    awayScore: number;
    awayInBonus: boolean;
    awayTimeoutsRemaining: number;
    awayTeamAssists: number;
    awayTeamRebounds: number;
    awayTeamOffensiveRebounds: number;
    awayTeamDefensiveRebounds: number;
    awayTeamTurnovers: number;
}
