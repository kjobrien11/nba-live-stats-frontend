export interface MatchupStats {
    gameStatusText: string;

    homeScore: number;
    homeInBonus: string;
    homeTimeoutsRemaining: number;
    homeTeamAssists: number;
    homeTeamRebounds: number;
    homeTeamOffensiveRebounds: number;
    homeTeamDefensiveRebounds: number;
    homeTeamTurnovers: number;
    homeTeamSteals:number;
    homeTeamBlocks:number;
    homeTeamFTPercentage : string;

    awayScore: number;
    awayInBonus: string;
    awayTimeoutsRemaining: number;
    awayTeamAssists: number;
    awayTeamRebounds: number;
    awayTeamOffensiveRebounds: number;
    awayTeamDefensiveRebounds: number;
    awayTeamTurnovers: number;
    awayTeamBlocks:number;
    awayTeamSteals:number;
    awayTeamFTPercentage : string;
}
