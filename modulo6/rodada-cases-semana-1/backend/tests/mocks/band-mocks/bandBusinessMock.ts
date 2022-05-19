import { BandBusiness } from "../../../src/Business/BandBusiness";
import { AuthenticatorMock } from "../AuthenticatorMock";
import { IdGeneratorMock } from "../IdGeneratorMock";
import { BandDatabaseMock } from "./BandDatabaseMock";

export const bandBusinessMock = new BandBusiness(
  new IdGeneratorMock(),
  new BandDatabaseMock() as any,
  new AuthenticatorMock()
);
